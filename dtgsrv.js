//################### Importação da bibliotecas ############
var express = require("express");
const path = require('path');
var cors = require("cors");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mariadb = require("mariadb");
const { SHA3 } = require("sha3");
//################### configurações ########################
//configuração do banco dedados
const dbvar = require("./dtg.json");
const pool = mariadb.createPool({
  host: dbvar.server,
  user: dbvar.user,
  password: dbvar.password,
  database: dbvar.db,
});
//configuração do servidor
var jsonParser = bodyParser.json();
var app = express();
const port = 8793;
//contantes para token de acesso
const SECRET_KEY = "862475391";
const expiresIn = "12h";
//configuração para criptografia sha-3 224
const hash = new SHA3(224);
// Para colocar em execução no servidor
var sleep = require("sleep");
const pm2 = require("pm2");

//configuração do git
const simpleGit = require("simple-git");
const { emit, exit } = require("process");
const git = simpleGit();

//conifguração para upload de arquivos
const formidable = require('formidable');
const fs = require('fs');
const stream = require('stream')
const folder = path.join(__dirname, 'arquivos');


//configuração do socket.io
app.use(cors());
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling']
  }
});



//################# funções #####################

//faz select no banco de dados
async function select_mdb(sql) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql);
    //esse loop serve para remover o meta que vem no resultado do sql
    let rows_sem_meta = [];
    for (let i = 0; i < rows.length; i++) {
      rows_sem_meta.push(rows[i]);
    }
    //console.log(rows);
    return rows_sem_meta;
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}

//faz update no banco no banco de dados
async function update_mdb(sql, values) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql, values);
    //console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}

//faz insert no banco no banco de dados
async function insert_mdb(sql, values) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql, values);
    //console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}



//faz deleta no banco no banco de dados
async function delete_mdb(sql) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql);
    //console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}

//cria token de acesso
function criarToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

//verifica token de acesso
function verificaToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}
//verifica se o login e senha do medico estão corretos
async function medEstaAutenticado({ login, senha }) {
  //console.log('senha:', senha)
  senha = hash.reset().update(senha).digest("hex");
  sql =
    " select u.senha senha,cast(u.tipo as int) id_tipo, u.tipo tipo, u.nome nome, cast(mc.categoria as int) id_categoria, mc.categoria categoria, CONCAT(mc.uf_crm,' ',mc.crm) crm, mc.aceite aceite, u.id_usuario id_usuario,mc.id_inst id_inst " +
    " from usuario u, med_coord mc " +
    " where " +
    " u.id_usuario=mc.id_med_coord and " +
    " u.ativo=1 and " +
    " u.login = '" +
    login +
    "' ";

  let senha_banco = await select_mdb(sql);
  //console.log('senha cripto:', senha)
  //console.log('senha_banco:',senha_banco[0].senha)
  if (typeof senha_banco[0] == "undefined") {
    return false;
  }
  if (senha == senha_banco[0].senha) {
    const usuario = {
      login: login,
      nome: senha_banco[0].nome,
      id_tipo: senha_banco[0].id_tipo,
      tipo: senha_banco[0].tipo,
      id_categoria: senha_banco[0].id_categoria,
      categoria: senha_banco[0].categoria,
      crm: senha_banco[0].crm,
      aceite: senha_banco[0].aceite,
      id_usuario: senha_banco[0].id_usuario,
      id_inst: senha_banco[0].id_inst,
    };
    return usuario;
  } else {
    return false;
  }
}

//verifica se o login e senha do paciente estão corretos
async function pacienteEstaAutenticado({ login, senha }) {
  //console.log('senha:', senha)
  senha = hash.reset().update(senha).digest("hex");
  sql =
    " select u.senha senha, u.nome nome,  p.aceite aceite, u.cpf, u.id_usuario id_usuario, p.id_inst id_inst, p.preceptor id_preceptor, u2.nome nome_preceptor  " +
    " from usuario u, paciente p, usuario u2 " +
    " where " +
    " u.id_usuario=p.id_paciente and " +
    " p.preceptor=u2.id_usuario and " +
    " u.ativo=1 and " +
    " u.login = '" +
    login +
    "' ";

  let senha_banco = await select_mdb(sql);
  //console.log('senha cripto:', senha)
  //console.log('senha_banco:',senha_banco[0].senha)
  if (typeof senha_banco[0] == "undefined") {
    return false;
  }
  if (senha == senha_banco[0].senha) {
    const usuario = {
      login: login,
      nome: senha_banco[0].nome,
      cpf: senha_banco[0].cpf,
      aceite: senha_banco[0].aceite,
      id_usuario: senha_banco[0].id_usuario,
      id_inst: senha_banco[0].id_inst,
      id_preceptor: senha_banco[0].id_preceptor,
      nome_preceptor: senha_banco[0].nome_preceptor
    };
    return usuario;
  } else {
    return false;
  }
}

//grava mensagem enviada no banco de dados

async function incluirMensagemBanco(remetente, destinatario, msg) {
  let sql = "insert into mensagens (msg,remetente,destinatario,data) values(?,?,?,NOW())";
  let values = [msg,remetente,destinatario];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    return resultado.insertId;
  } else {   
    return false;
  }
}

//consultar mensagem  no banco de dados de um paciente
 async function consultarMensagensBanco (id_paciente) {

  //definir o sql padrão { idMsg, remetenteid, remetente, destinatario, msg, sala: usuario.sala }
   let sql = " select " +
     " m.id_msg idMsg, " +
     " m.remetente remetenteid, " +
     " u.nome remetente, " +
     " m.destinatario destinatario, " +
     " m.msg msg, " +
     " '"+id_paciente+"' sala " +
     " from  " +
     " mensagens m,  " +
     " usuario u " +
     " where " +
     " m.remetente = u.id_usuario and " +
     " ( m.remetente = "+id_paciente+" or m.destinatario = "+id_paciente+")  " +
     " order by m.id_msg";
  
  
  let resultado = await select_mdb(sql);
  return resultado
  
}



//################# servidor ###########################
app.get("/deploy", function (req, res) {
  git.pull().pull("origin", "master", { "--rebase": "true" });
  sleep.sleep(5);
  res.redirect("/");
});
app.get("/pmstatus", function (req, res) {
  pm2.connect(errback);
  res.send(pm2.list(errback));
  pm2.disconnect();
});

//verifica token de acesso se a página precisar de autenticação
app.use(/^(?!\/auth).*$/, (req, res, next) => {
  //console.log('headers: ',req.headers);
  
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    if (req.url == "/") {
      next();
      return;
    }

    const status = 401;
    const message = "Token inválido";
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verificaResultadoToken;
    verificaResultadoToken = verificaToken(
      req.headers.authorization.split(" ")[1]
    );
    //console.log('verificaResultadoToken: ',verificaResultadoToken);
    if (verificaResultadoToken instanceof Error) {
      const status = 401;
      const message = "Token de autenticação não encontrado";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Token revogado";
    res.status(status).json({ status, message });
  }
});
app.use(express.static(path.join(__dirname, '/spa')));
// Alo mundo
app.get("/", function (req, res) {
 res.render('index.html');
});

//################################sockets#########################
let usuarios = [];
let mensagens = [];
io.on('connection', socket => {
  //console.log(`Socket conectado: `,socket.id);  
  
  socket.on('login', async ({ id_usuario, id_paciente }) => {
    if (!isNaN(id_usuario) && !isNaN(id_paciente)) {
      usuarios.push({ id: socket.id, id_usuario: id_usuario, sala: id_paciente })
      socket.join(id_paciente)
      let mensagensAnteriores = mensagens.filter(msg => {
        return msg.sala == id_paciente
      })
      if (mensagensAnteriores.length == 0) {
        mensagensAnteriores = await consultarMensagensBanco(id_paciente);
        mensagens = mensagens.concat(mensagensAnteriores);
        //console.log('msgAux', msgAux);
      }
      socket.emit('mensagensAnteriores', mensagensAnteriores);
    }
    //console.log(usuarios);
    //socket.in(room).emit('notification', { title: 'Someone\'s here', description: `${user.name} just entered the room` })
    //io.in(room).emit('users', getUsers(room))
    //callback()        
  })
  socket.on('logout', ( sala ) => {
    try {
      const index = usuarios.findIndex((user) => user.id === socket.id);
      let usuario = {};
      if (index !== -1) { usuario = usuarios.splice(index, 1)[0]; }
      //console.log('[socket]','Logout :', sala,usuario);
      socket.leave(sala);
       
      //socket.to(room).emit('user left', socket.id);
    }catch(e){
      console.log('[error]','logout :', e);
      //socket.emit('error','couldnt perform requested action');
    }
    
    //console.log(usuarios);
    //socket.in(room).emit('notification', { title: 'Someone\'s here', description: `${user.name} just entered the room` })
    //io.in(room).emit('users', getUsers(room))
    //callback()        
  })
  
  socket.on('enviarMensagem', async ({ remetenteid,remetente, destinatario, msg }) => {
    const usuario = usuarios.find(user => user.id == socket.id)
    const idMsg = await incluirMensagemBanco(remetenteid, destinatario, msg)
    let objMsg = {}
    
    //console.log('idMSG', idMsg);
    if (idMsg) {
      objMsg = { idMsg, remetenteid, remetente, destinatario, msg, sala: usuario.sala }
      mensagens.push(objMsg)
      //console.log("mensagens", mensagens)
      io.in(usuario.sala).emit('mensagem', objMsg);
    }
    else {
      objMsg={ idMsg: 999, remetenteid, remetente, destinatario, msg: 'erro', sala: null }
      socket.emit('mensagem', objMsg);
    }
  })

  socket.on("disconnect", () => {
    //console.log("Usuario desconectado");
    const index = usuarios.findIndex((user) => user.id === socket.id);
    let usuario = {};
    if (index !== -1) { usuario = usuarios.splice(index, 1)[0]; }
      //if (usuario) {
        //io.in(usuario.sala).emit('notification', { title: 'Someone just left', description: `${usuario.id_usuario} just left the room` })
        //io.in(usuario.sala).emit('users', getUsers(usuario.sala))
    //}
    })
    
})

//################################## webservices #########################
//################################## MainLayout #########################
//webservice verifica se login e senha são iguais
app.post("/auth/loginSenhaIguais", jsonParser, async (req, res) => {
  //receber login e senha
  //console.log(req.body)
  const { login } = req.body;
  criptLogin = hash.reset().update(login).digest("hex");
  //fazer select no banco de dados
  
  sql =
    " select u.senha senha" +
    " from usuario u " +
    " where " +    
    " u.login = '" +
    login +
    "' ";
  var resultado = await select_mdb(sql);

  if (resultado.length > 0) {
    let e_igual = (resultado[0].senha==criptLogin)
    
    res.status(200).json({ e_igual });
    return;
  }
  
  
});

//################################## tela de Login #########################
//webservice de login
app.post("/auth/login", jsonParser, async (req, res) => {
  //receber login e senha
  //console.log(req.body)
  const { login, senha } = req.body;
  
  //fazer select no banco de dados
  var credenciais_corretas = await medEstaAutenticado({ login, senha });
  if (credenciais_corretas === false) {
    const status = 401;
    const message = "Login ou senha incorretos!";
    res.status(status).json({ status, message });
    return;
  }
  //criar o token de acesso
  const access_token = criarToken({ login, senha });
  //retornar o usuario e o token
  console.log(login + " está logado");
  res.status(200).json({ access_token, credenciais: credenciais_corretas });
});
//################################## tela de termo de aceite #########################
//webservice de aceite do médico ou coordenador
app.post("/auth/aceite_med", jsonParser, async (req, res) => {
  //receber id_usuario
  //console.log(req.body)
  const { id_usuario } = req.body;
  //console.log(id_usuario)
  //fazer o update do aceite no banco de dados
  sql = "update med_coord set aceite=1 where id_med_coord= ? ";
  let resultado = await update_mdb(sql, [id_usuario]);
  //console.log(resultado);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 409;
    const message = "Não foi possivel fazer o aceite, usuário não encontrado!";
    res.status(status).json({ status, message });
    return;
  }
});
//################################## tela de alteração de senha #########################
//webservice de alterar senha do médico ou coordenador
app.post("/auth/alterar_senha_med", jsonParser, async (req, res) => {
  //receber login, senha, nova_senha
  //console.log(req.body)
  let { login, senha, nova_senha } = req.body;
  //verificar se as cedenciais estão corretas
  var credenciais_corretas = await medEstaAutenticado({ login, senha });
  if (credenciais_corretas === false) {
    const status = 401;
    const message = "Login ou senha incorretos!";
    res.status(status).json({ status, message });
    return;
  }
  //pega o id do usuario
  id_usuario = credenciais_corretas.id_usuario;
  //criptografa a senha
  nova_senha = hash.reset().update(nova_senha).digest("hex");
  //alterar a senha no banco de dados
  sql = "update usuario set senha = ? where id_usuario= ?";
  let resultado = await update_mdb(sql, [nova_senha, id_usuario]);

  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 409;
    const message = "Não foi possivel alterar a senha!";
    res.status(status).json({ status, message });
    return;
  }
});
//################################## tela de area de acesso #########################
//webservice de consultar dados do médico ou coordenador
app.post("/consultar_medicos", jsonParser, async (req, res) => {
  //receber nome, crm, uf_crm, tipo, situacao,categoria
  let { nome, crm, uf_crm, tipo, situacao, categoria, id_inst } = req.body;
  let sql =
    " select u.id_usuario id_usuario, u.nome nome, mc.categoria categoria, mc.uf_crm uf_crm,mc.crm crm, i.nome_inst instituicao,u.ativo ativo  " +
    " from usuario u, med_coord mc, instituicao i " +
    " where " +
    " u.id_usuario=mc.id_med_coord  " +
    " and mc.id_inst=i.id_inst " +
    " and mc.id_inst= " +
    id_inst;
  let where = "";
  if (nome != "") {
    where += " and UPPER(u.nome) like UPPER('%" + nome + "%') ";
  }

  if (crm != "") {
    where += " and mc.crm = " + crm + " ";
  }

  if (uf_crm != "") {
    where += " and mc.uf_crm = '" + uf_crm + "' ";
  }

  if (tipo != "") {
    where += " and u.tipo = '" + tipo + "' ";
  }

  if (situacao != "") {
    where += " and u.ativo = '" + situacao + "' ";
  }

  if (categoria != "") {
    where += " and mc.categoria = '" + categoria + "' ";
  }

  sql += where;

  ordem = " order by nome ";
  sql += ordem;
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice retorna todos os dados de um médico ou coordenador
app.post("/dados_medico", jsonParser, async (req, res) => {
  //receber nome, crm, uf_crm, tipo, situacao,categoria
  let { id_usuario } = req.body;
  let sql =
    " select u.id_usuario id_usuario," +
    " u.nome nome," +
    " u.tipo tipoAcesso, " +
    " u.cep cep, " +
    " u.uf_resid uf, " +
    " u.cidade cidade, " +
    " u.num_resid numero, " +
    " u.complemento complemento, " +
    " u.logradouro logradouro, " +
    " u.bairro bairro, " +
    " u.cpf cpf, " +
    " date_format(u.dt_nasc,'%Y-%m-%d') dataNasc, " +
    " u.login login, " +
    " mc.crm crm, " +
    " mc.uf_crm ufCrm, " +
    " mc.categoria categoria, " +
    " mc.aceite, " +
    " mc.id_med_coord, " +
    " mc.id_inst instituicao" +
    " from usuario u, med_coord mc, instituicao i " +
    " where " +
    " u.id_usuario=mc.id_med_coord  " +
    " and mc.id_inst=i.id_inst " +
    " and u.id_usuario = " +
    id_usuario;
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice ativar ou inativar usuario
app.post("/ativaInativarUsuario", jsonParser, async (req, res) => {
  //receber id_usuario

  let { id_usuario, valor } = req.body;

  //alterar o campo ativo no banco de dados
  sql = "update usuario set ativo = ?  where id_usuario = ?";
  let resultado = await update_mdb(sql, [valor, id_usuario]);

  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 409;
    const message = "Não foi possivel ativar/inativar o usuario!";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de cadastro da area de acesso #########################
//webservice incluir novo médico ou coordenador
app.post("/incluir_med_coord", jsonParser, async (req, res) => {
  //receber nome,dataNasc, cpf, nomeMae, cep,logradouro, numero,complemento, uf, cidade, bairro, ufCrm,crm,  categoria,instituicao,tipoAcesso,login,  senha
  let {
    nome,
    dataNasc,
    cpf,
    cep,
    logradouro,
    numero,
    complemento,
    uf,
    cidade,
    bairro,
    ufCrm,
    crm,
    categoria,
    instituicao,
    tipoAcesso,
    login,
  } = req.body;
  //criptografa a senha
  let senha = hash.reset().update(login).digest("hex");
  let conn = await pool.getConnection();
  //incluir usuario
  try {
    
    await conn.beginTransaction();
    let sql =
    "insert into usuario (nome," +
    "tipo," +
    "cep," +
    "uf_resid," +
    "cidade," +
    "num_resid," +
    "complemento," +
    "logradouro," +
    "bairro," +
    "cpf," +
    "dt_nasc," +
    "login," +
    "senha) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
  let values = [
    nome,
    tipoAcesso,
    cep,
    uf,
    cidade,
    numero,
    complemento,
    logradouro,
    bairro,
    cpf,
    dataNasc,
    login,
    senha,
  ];
  //console.log('values',values)
  let resultado = await conn.query(sql, values);
  //console.log(resultado)
  //se deu certo tenta incluir em medCoord
    if (resultado.affectedRows > 0) {
      let sqlMed =
        "insert into med_coord (crm," +
        "uf_crm," +
        "categoria," +
        "aceite," +
        "id_med_coord," +
        "id_inst" +
        ") values(?,?,?,?,?,?)";
      let valuesMed = [crm, ufCrm, categoria, 0, resultado.insertId, instituicao];
      let resultado2 = await conn.query(sqlMed, valuesMed);
      if (resultado2.affectedRows > 0) {
        await conn.commit();
        res.status(200).json({ resultado: [values, valuesMed] });
        return;
      } else {
        const status = 409;
        const message = "Não foi possível incluir os dados do médico.";
        await conn.rollback();
        res.status(status).json({ status, message });
        return;
      }
    } else {
      const status = 409;
      const message = "Não foi possível incluir o usuario do médico.";
      await conn.rollback();
      res.status(status).json({ status, message });
      return;
    }
  } catch (err) {
    console.log(err);
    const status = 409;      
    const message = "Não foi possível incluir os dados do médico.";      
    res.status(status).json({ status, message });
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }  
});

//webservice alterar os dados de um médico ou coordenador
app.post("/alterar_med_coord", jsonParser, async (req, res) => {
  //receber nome,dataNasc, cpf, nomeMae, cep,logradouro, numero,complemento, uf, cidade, bairro, ufCrm,crm,  categoria,instituicao,tipoAcesso,login,  senha
  let {
    id_usuario,
    nome,
    dataNasc,
    cpf,
    cep,
    logradouro,
    numero,
    complemento,
    uf,
    cidade,
    bairro,
    ufCrm,
    crm,
    categoria,
    instituicao,
    tipoAcesso,
    login,
  } = req.body;

  //alterar usuario

  let sql =
    "update usuario set nome = ?, " +
    " tipo = ?, " +
    " cep = ?, " +
    " uf_resid = ?, " +
    " cidade = ?, " +
    " num_resid = ?, " +
    " complemento = ?, " +
    " logradouro = ?, " +
    " bairro = ?, " +
    " cpf = ?, " +
    " dt_nasc = ?, " +
    " login = ? " +
    " where id_usuario = ? ";
  values = [
    nome,
    tipoAcesso,
    cep,
    uf,
    cidade,
    numero,
    complemento,
    logradouro,
    bairro,
    cpf,
    dataNasc,
    login,
    id_usuario,
  ]
  //console.log('values',values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  //se deu certo tenta incluir em medCoord
  if (resultado.affectedRows > 0) {
    let sqlMed =
      "update med_coord set crm = ?, " +
      " uf_crm = ?, " +
      " categoria = ?, " +
      " id_inst = ? " +
      " where id_med_coord = ? ";
    //console.log(sqlMed)
    let resultado2 = await update_mdb(sqlMed, [
      crm,
      ufCrm,
      categoria,
      instituicao,
      id_usuario,
    ]);
    if (resultado2.affectedRows > 0) {
      res.status(200).json({ resultado: [req.body, resultado, resultado2] });
      return;
    } else {
      const status = 409;
      const message = "Não foi possível alterar os dados do médico.";
      res.status(status).json({ status, message });
      return;
    }
  } else {
    const status = 409;
    const message = "Não foi possível alterar o usuario do médico.";
    res.status(status).json({ status, message });
    return;
  }
});

//webservice para resetar senha
//este webservice tbm é chamado na tela de cadastro de pacientes
app.post("/resetar_senha", jsonParser, async (req, res) => {
  //esse webservice deixa a senha igual ao login do usuario
  //receber id_usuario e o longin
  let { id_usuario, login } = req.body;
  //criptografa a senha
  let senha = hash.reset().update(login).digest("hex");
  //alterar senha do usuario

  let sql = "update usuario set senha = ? where id_usuario = ? and login = ? ";
  //console.log('values',values)
  let resultado = await update_mdb(sql, [senha, id_usuario, login]);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "senha resetada com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível alterar a senha do usuario ";
    res.status(status).json({ status, message });
    return;
  }
});

//webservice para verificar se o login escolhido está disponível
app.post("/login_disponivel", jsonParser, async (req, res) => {
  //receber login
  let { login, id_usuario } = req.body;
  //definir o sql padrão
  let sql = " select id_usuario  from usuario where login='" + login + "'";
  let where = "";
  if (id_usuario != "" && id_usuario !=undefined) {
    where += " and id_usuario != " + id_usuario ;
  }
  sql += where;
  let resultado = await select_mdb(sql);
  //console.log(resultado);
  if (resultado.length == 0) {
    res.status(200).json({ disponivel: true });
  } else {
    res.status(200).json({ disponivel: false });
  }
});

//################################## tela de consulta MAC #########################
//webservice de consultar MAC (Método anticoncepcional)
app.post("/consultar_mac", jsonParser, async (req, res) => {
  //receber descricao
  let { descricao } = req.body;
  //definir o sql padrão
  let sql = " select id_mac id, descricao  from mac ";
  //variável que receberá o where
  let where = "";
  //se descrição foi enviado define um like no sql
  if (descricao != "") {
    where += "  UPPER(descricao) like UPPER('%" + descricao + "%') ";
  }
  //des

  if (where != "") {
    where = " where " + where;
  }

  sql += where;

  ordem = " order by descricao ";
  sql += ordem;
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de exclusão de MAC
app.post("/excluir_mac", jsonParser, async (req, res) => {
  //receber id
  let { id } = req.body;
  //definir o sql padrão
  let sql = "delete from mac where id_mac = " + id;
  let resultado = await delete_mdb(sql);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível excluir os dados de método anticoncepcinal.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Cadastro de MAC #########################
//webservice de incluir de  MAC (Método anticoncepcional)
app.post("/incluir_mac", jsonParser, async (req, res) => {
  //receber descricao
  let { descricao } = req.body;
  //definir o sql padrão
  let sql = "insert into mac (descricao) values(?)";
  let values = [descricao];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível incluir os dados do MAC.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de consulta Instituição #########################
//webservice de consultar Instituição
app.post("/consultar_instituicao", jsonParser, async (req, res) => {
  //receber descricao

  let { nome, cep, logradouro, uf } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " id_inst id, " +
    " nome_inst nome, " +
    " logradouro_inst logradouro," +
    " num_inst numero," +
    " cep_inst cep, " +
    " bairro_inst bairro, " +
    " cidade_inst cidade, " +
    " uf_inst uf, " +
    " complemento_inst complemento, " +
    " ativo ativo " +
    " from instituicao ";
  //variável que receberá o where
  let where = "";
  //se nome foi enviado define um like no sql
  if (nome != "") {
    where += "  UPPER(nome_inst) like UPPER('%" + nome + "%') ";
  }
  //se cep foi enviado define um like no sql
  if (cep != "") {
    where += "  UPPER(cep_inst) like UPPER('%" + cep + "%') ";
  }
  //se nome foi enviado define um like no sql
  if (logradouro != "") {
    where += "  UPPER(logradouro_inst) like UPPER('%" + logradouro + "%') ";
  }
  //se nome foi enviado define uma igualdade no sql
  if (logradouro != "") {
    where += "  UPPER(uf_inst) = UPPER('%" + uf + "%') ";
  }

  if (where != "") {
    where = " where " + where;
  }

  sql += where;

  ordem = " order by nome ";
  sql += ordem;
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de exclusão de Intituição
app.post("/excluir_instituicao", jsonParser, async (req, res) => {
  //receber id
  let { id } = req.body;
  //definir o sql padrão
  let sql = "delete from instituicao where id_inst = " + id;
  let resultado = await delete_mdb(sql);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível excluir os dados da instituição.";
    res.status(status).json({ status, message });
    return;
  }
});

//webservice ativar ou inativar instituição
app.post("/ativa_inativar_instituicao", jsonParser, async (req, res) => {
  //receber id_inst

  let { id_inst, valor } = req.body;

  //alterar o campo ativo no banco de dados
  sql = "update instituicao set ativo = ?  where id_inst = ?";
  let resultado = await update_mdb(sql, [valor, id_inst]);

  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 409;
    const message = "Não foi possivel ativar/inativar a instituição!";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Cadastro de Instituição #########################
//webservice de incluir Instituição
app.post("/incluir_instituicao", jsonParser, async (req, res) => {
  //receber dados para inclusão
  let {
    nome,
    cep,
    logradouro,
    numero,
    complemento,
    uf,
    cidade,
    bairro,
  } = req.body;
  //definir o sql padrão
  let sql =
    "insert into instituicao ( " +
    " nome_inst , " +
    " logradouro_inst ," +
    " num_inst ," +
    " cep_inst , " +
    " bairro_inst , " +
    " cidade_inst , " +
    " uf_inst , " +
    " complemento_inst  " +
    ") values(?,?,?,?,?,?,?,?)";
  let values = [nome, logradouro, numero, cep, bairro, cidade, uf, complemento];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível incluir os dados da Instituição.";
    res.status(status).json({ status, message });
    return;
  }
});

//webservice de carrega dados de um instituição
app.post("/dados_instituicao", jsonParser, async (req, res) => {
  //receber descricao

  let { id_inst } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " id_inst id, " +
    " nome_inst nome, " +
    " logradouro_inst logradouro," +
    " num_inst numero," +
    " cep_inst cep, " +
    " bairro_inst bairro, " +
    " cidade_inst cidade, " +
    " uf_inst uf, " +
    " complemento_inst complemento, " +
    " ativo ativo " +
    " from instituicao " +
    " where " +
    " id_inst = " + id_inst;
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de alterar Instituição
app.post("/alterar_instituicao", jsonParser, async (req, res) => {
  //receber dados para alterar
  let {
    nome,
    cep,
    logradouro,
    numero,
    complemento,
    uf,
    cidade,
    bairro,
    id_inst
  } = req.body;

  //alterar senha do usuario
  let sql =
    "update instituicao set " +
    " nome_inst  = ?, " +
    " logradouro_inst = ?, " +
    " num_inst = ?, " +
    " cep_inst = ?, " +
    " bairro_inst = ?, " +
    " cidade_inst = ?, " +
    " uf_inst = ?, " +
    " complemento_inst = ? " +
    " where id_inst = ? ";
  let values = [nome, logradouro, numero, cep, bairro, cidade, uf, complemento, id_inst];
  //console.log('sql',sql)
  //console.log('values', values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "instituição alterada com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível alterar a instituição ";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Indicação #########################
//webservice de consultar Indicação
app.post("/consultar_indicacao", jsonParser, async (req, res) => {
  //receber descricao
  let { descricao } = req.body;
  //definir o sql padrão
  let sql = " select id_indicacao id, descricao from indicacao ";
  //variável que receberá o where
  let where = "";
  //se descrição foi enviado define um like no sql
  if (descricao != "") {
    where += "  UPPER(descricao) like UPPER('%" + descricao + "%') ";
  }
  //des

  if (where != "") {
    where = " where " + where;
  }

  sql += where;

  ordem = " order by descricao ";
  sql += ordem;
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de exclusão de indicação
app.post("/excluir_indicacao", jsonParser, async (req, res) => {
  //receber id

  const util = require("util");

  let { id } = req.body;
  //definir o sql padrão
  let sql = "delete from indicacao where id_indicacao = " + id;
  let resultado = await delete_mdb(sql);
  //console.log('resultado', util.inspect( resultado.errno));
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível excluir os dados da forma de Indicação. ("+resultado.errno+":"+resultado.code+")";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Cadastro de Indicações #########################
//webservice de incluir Indicação
app.post("/incluir_indicacao", jsonParser, async (req, res) => {
  //receber descricao
  let { descricao } = req.body;
  //definir o sql padrão
  let sql = "insert into indicacao (descricao) values(?)";
  let values = [descricao];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível incluir os dados da forma de Indicação.";
    res.status(status).json({ status, message });
    return;
  }
});


//################################## tela de consulta de resultado da Anatomia Patológica #########################
//webservice de consulta resultado da anatomia patológica
app.post("/consultar_resultado_ap", jsonParser, async (req, res) => {
  //receber descrição da anatomia patológica
  let { descricao } = req.body;
  let sql = " select id_resultado_ap id, descricao from resultado_ap ";
  let where = "";
  if (descricao != "") {
    where += " UPPER(descricao) like UPPER('%" + descricao + "%') ";
  }

  if (where != "") {
    where = " where " + where;
  }

  sql += where;

  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de exclusão da Anatomia Patológica
app.post("/excluir_resultado_ap", jsonParser, async (req, res) => {
  //receber id
  let { id } = req.body;
  //definir o sql padrão
  let sql = "delete from resultado_ap where id_resultado_ap = " + id;
  let resultado = await delete_mdb(sql);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado });
    return;
  } else {
    const status = 409;
    const message =
      "Não foi possível excluir os dados de resultado da Anatomia Patologica.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Cadastro de resultado da Anatomia Patológica #########################
//webservice de resultado da Anatomia Patológica
app.post("/incluir_resultado_ap", jsonParser, async (req, res) => {
  //receber descricao
  let { descricao } = req.body;
  //definir o sql padrão
  let sql = "insert into resultado_ap (descricao) values(?)";
  let values = [descricao];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message =
      "Não foi possível incluir os dados de resultado da Anatomia Patologica.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de consulta CID #########################
//webservice de consultar CID
app.post("/consultar_cid", jsonParser, async (req, res) => {
  //receber cod_cid, descricao, ativo

  let { cod_cid, descricao } = req.body;
  //definir o sql padrão
  let sql =
    " select " +
    " id_cid, " +
    " cod_cid, " +
    " descricao," +
    " ativo " +   
    " from cid ";
  //variável que receberá o where
  let where = "";
  //se codigo do CID foi enviado define um like no sql
  if (cod_cid != "") {
    where += "  UPPER(cod_cid) like UPPER('%" + cod_cid + "%') ";
  }
  //se descricao foi enviado define um like no sql
  if (descricao != "") {
    where += "  UPPER(descricao) like UPPER('%" + descricao + "%') ";
  }  

  if (where != "") {
    where = " where " + where;
  }

  sql += where;

  ordem = " order by descricao ";
  sql += ordem;
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});


//webservice ativar ou inativar CID
app.post("/ativar_inativar_cid", jsonParser, async (req, res) => {
  //receber id_cid

  let { id_cid, valor } = req.body;

  //alterar o campo ativo no banco de dados
  sql = "update cid set ativo = ?  where id_cid = ?";
  let resultado = await update_mdb(sql, [valor, id_cid]);

  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 409;
    const message = "Não foi possivel ativar/inativar o CID!";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Cadastro de CID #########################

//webservice de incluir CID
app.post("/incluir_cid", jsonParser, async (req, res) => {
  //receber dados para inclusão
  let {
    cod_cid,
    descricao
  } = req.body;
  //definir o sql padrão
  let sql =
    "insert into cid ( " +
    " cod_cid , " +
    " descricao, " +
    " ativo " +
    ") values(?,?,1)";
  let values = [cod_cid, descricao];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível incluir os dados do CID.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de consulta de pacientes #########################
//webservice de consultar pacientes
app.post("/consultar_pacientes", jsonParser, async (req, res) => {
  //receber nome, cpf, preceptor, termino_caso, situacao,categoria, id_inst, usuario_logado
  let { nome, cpf, preceptor, term_caso, id_inst, usuario_logado } = req.body;
  let sql =
    " select " +
    "  u.id_usuario id_usuario, " +
    "  u.nome nome_paciente, " +
    "  u2.nome nome_preceptor, " +
    "  u.ativo ativo, " +
    "  u.cpf cpf, " +
    "  rm.term_caso term_caso, " +
    "  cast(rm.term_caso as int) id_term_caso, " +
    "  rm.id_r_mola id_r_mola,  " +
    "  DATE_FORMAT((select max(data) from mensagens m  where remetente = p.id_paciente),'%d/%m/%Y %T') ultima_paciente, " +
    "  DATE_FORMAT((select max(data) from mensagens m  where destinatario = p.id_paciente),'%d/%m/%Y %T') ultima_medico " +
    " from  " +
    "  usuario u,paciente p, " +
    "  usuario u2, " +
    "  registro_mola rm " +
    " where " +
    "  u.id_usuario=p.id_paciente  " +
    "  and p.id_paciente=rm.id_paciente  " +
    "  and p.preceptor=u2.id_usuario  " +    
    "  and p.id_inst= " + id_inst +
    "  and p.id_paciente in (select id_paciente from responsaveis where id_med_coord = "+usuario_logado+")";
  let where = "";
  if (nome != "") {
    where += " and UPPER(u.nome) like UPPER('%" + nome + "%') ";
  }

  if (cpf != "") {
    where += " and u.cpf = " + cpf + " ";
  }

  if (preceptor != "") {
    where += " and UPPER(u2.nome) like UPPER('%" + preceptor + "%') ";
  }

  if (term_caso != "") {
    if (term_caso == "Em andamento") {
      where += " and rm.term_caso is null";
    } else {
      where += " and rm.term_caso = '" + term_caso + "' ";
    }
  }

  sql += where;

  ordem = " order by nome_paciente ";
  sql += ordem;
  //console.log(sql);
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//################################## tela de cadastro de pacientes  #########################
//webservice de incluir paciente
app.post("/incluir_paciente", jsonParser, async (req, res) => {
  //receber nome,dataNasc, cpf, nomeMae, cep,logradouro, numero,complemento, uf, cidade, bairro, ufCrm,crm,  categoria,instituicao,tipoAcesso,login,  senha
  let {
    nome,
    data_nasc,
    cpf,
    nome_mae,
    cep,
    logradouro,
    numero,
    complemento,
    uf,
    cidade,
    bairro,
    sus,
    rh,
    instituicao,
    cor,
    indicacao,
    estado_civil,
    tipo_sanguineo,
    fator_rh,
    tel_proprio,
    tel_contato,
    nome_contato,
    email,
    reacoes_alergicas,
    preceptor,
    rg,
    rne,
    nacionalidade,
    login,
    escolaridade,
    cadastrante,
  } = req.body;

  //criptografa a senha
  let senha = hash.reset().update(login).digest("hex");
  let conn = await pool.getConnection();
  try {
    
    await conn.beginTransaction();
    
    let sql =
    " insert into usuario (nome, " +
    " tipo, " +
    " cep, " +
    " uf_resid, " +
    " cidade, " +
    " num_resid, " +
    " complemento, " +
    " logradouro, " +
    " bairro, " +
    " cpf, " +
    " dt_nasc, " +
    " login, " +
    " senha) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    let values = [
      nome,
      1,
      cep,
      uf,
      cidade,
      numero,
      complemento,
      logradouro,
      bairro,
      cpf,
      data_nasc,
      login,
      senha,
    ];

    let resultado  = await conn.query(sql, values);
    if (resultado.affectedRows > 0) {
    let sqlPaci =
      "insert into paciente ( " +
      " sus, " +
      " rh, " +
      " cor, " +
      " tipo_sanguineo, " +
      " rh_tipo_sanguineo, " +
      " tel_proprio, " +
      " tel_contato, " +
      " nome_contato, " +
      " reacoes_alergicas, " +
      " estado_civil, " +
      " nome_mae, " +
      " escolaridade, " +
      " email, " +
      " rne, " +
      " rg, " +
      " nacionalidade, " +
      " id_paciente, " +
      " id_indicacao, " +
      " preceptor, " +
      " id_inst " +
      " ) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let valuesPaci = [
      sus,
      rh,
      cor,
      tipo_sanguineo,
      fator_rh,
      tel_proprio,
      tel_contato,
      nome_contato,
      reacoes_alergicas,
      estado_civil,
      nome_mae,
      escolaridade,
      email,
      rne,
      rg,
      nacionalidade,
      resultado.insertId,
      indicacao,
      preceptor,
      instituicao,
    ];

    //console.log(valuesPaci);
    let resultado2 = await conn.query(sqlPaci, valuesPaci);
    if (resultado2.affectedRows > 0) {
      let sqlRMola =
        "insert into registro_mola ( " +
        " id_paciente, " +
        " pessoa_ult, " +
        " data_ult " +
        " ) values(?, ?, NOW())";

      let valuesRmola = [resultado.insertId, cadastrante];
      let resultado3 = await conn.query(sqlRMola, valuesRmola);
      if (resultado3.affectedRows > 0) {
        await conn.commit();
        res.status(200).json({ resultado: [values, valuesPaci] });
        return;
      } else {
        const status = 409;
        const message =
          "Não foi possível incluir os dados do registro mola do paciente.";
        await conn.rollback();
        res.status(status).json({ status, message });
        return;
      }
    } else {
      const status = 409;
      const message = "Não foi possível incluir os dados do paciente.";
      await conn.rollback();
      res.status(status).json({ status, message });
      return;
    }
  } else {    
      const status = 409;      
      const message = "Não foi possível incluir o usuario do paciente.";
      await conn.rollback();
    res.status(status).json({ status, message });
    return;
  }
    
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
  
});


//webservice tras os dados de um paciente
app.post("/dados_paciente", jsonParser, async (req, res) => {
  //receber id_usuario
  let { id_usuario } = req.body;
  let sql =
    "select " +
    " u.id_usuario id_usuario, " +
    " p.sus sus, " +
    " p.rh rh, " +
    " p.cor cor, " +
    " p.tipo_sanguineo tipo_sanguineo, " +
    " p.rh_tipo_sanguineo fator_rh, " +
    " p.tel_proprio tel_proprio, " +
    " p.tel_contato tel_contato, " +
    " p.nome_contato nome_contato, " +
    " p.reacoes_alergicas reacoes_alergicas, " +
    " p.estado_civil estado_civil, " +
    " p.nome_mae nome_mae, " +
    " p.escolaridade escolaridade, " +
    " p.email email, " +
    " p.rne rne, " +
    " p.rg rg, " +
    " p.nacionalidade nacionalidade, " +
    " p.id_indicacao indicacao, " +
    " p.preceptor preceptor, " +
    " u2.nome nome_preceptor, " +
    " p.id_inst instituicao, " +
    " u.nome nome, " +
    " u.cep cep, " +
    " u.uf_resid uf, " +
    " u.cidade cidade, " +
    " u.num_resid numero, " +
    " u.complemento complemento, " +
    " u.logradouro logradouro, " +
    " u.bairro bairro, " +
    " u.cpf cpf, " +
    " u.dt_nasc data_nasc, " +
    " u.login login " +
    " from usuario u,paciente p, usuario u2, registro_mola rm " +
    " where " +
    " u.id_usuario=p.id_paciente  " +
    " and p.id_paciente=rm.id_paciente  " +
    " and p.preceptor=u2.id_usuario  " +
    " and u.id_usuario = " +
    id_usuario +
    " order by u.id_usuario ";

  //console.log(sql);
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice alterar os dados de um paciente
app.post("/alterar_paciente", jsonParser, async (req, res) => {
  //receber dados para alteração do paciente
  let {
    id_usuario,
    nome,
    data_nasc,
    cpf,
    nome_mae,
    cep,
    logradouro,
    numero,
    complemento,
    uf,
    cidade,
    bairro,
    sus,
    rh,
    instituicao,
    cor,
    indicacao,
    estado_civil,
    tipo_sanguineo,
    fator_rh,
    tel_proprio,
    tel_contato,
    nome_contato,
    email,
    reacoes_alergicas,
    preceptor,
    rg,
    rne,
    nacionalidade,
    login,
    escolaridade,
  } = req.body;

  //console.log("body", req.body);

  //alterar usuario

  let sql =
    "update usuario set nome = ?, " +
    " cep = ? , " +
    " uf_resid = ? ," +
    " cidade = ? , " +
    " num_resid = ?, " +
    " complemento = ?, " +
    " logradouro = ?, " +
    " bairro = ?, " +
    " cpf = ?, " +
    " dt_nasc = ?, " +
    " login = ? where id_usuario = ? ";

  //console.log('values',values);
  //console.log("sql", sql);
  let resultado = await update_mdb(sql, [
    nome,
    cep,
    uf,
    cidade,
    numero,
    complemento,
    logradouro,
    bairro,
    cpf,
    data_nasc,
    login,
    id_usuario,
  ]);
  //console.log(resultado)
  //se deu certo tenta incluir em paciente
  if (resultado.affectedRows > 0) {
    let sqlPaci =
      "update paciente set " +
      " sus = ?, " +
      " rh = ?, " +
      " cor = ?, " +
      " tipo_sanguineo = ?, " +
      " rh_tipo_sanguineo = ?, " +
      " tel_proprio = ?, " +
      " tel_contato = ?, " +
      " nome_contato = ?, " +
      " reacoes_alergicas = ?, " +
      " estado_civil = ?, " +
      " nome_mae = ?, " +
      " escolaridade = ?, " +
      " email = ?, " +
      " rne = ?, " +
      " rg = ?, " +
      " nacionalidade = ?, " +
      " id_indicacao = ?, " +
      " preceptor = ?, " +
      " id_inst = ? " +
      " where id_paciente = ?";
    //console.log(sqlMed)
    let resultado2 = await update_mdb(sqlPaci, [
      sus,
      rh,
      cor,
      tipo_sanguineo,
      fator_rh,
      tel_proprio,
      tel_contato,
      nome_contato,
      reacoes_alergicas,
      estado_civil,
      nome_mae,
      escolaridade,
      email,
      rne,
      rg,
      nacionalidade,
      indicacao,
      preceptor,
      instituicao,
      id_usuario,
    ]);
    if (resultado2.affectedRows > 0) {
      res.status(200).json({ resultado: [req.body, resultado, resultado2] });
      return;
    } else {
      const status = 409;
      const message = "Não foi possível alterar os dados do paciente.";
      res.status(status).json({ status, message });
      return;
    }
  } else {
    const status = 409;
    const message = "Não foi possível incluir o usuario do paciente.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de consulta de delegados #########################
//webservice de consulta delegados
app.post("/consultar_delegados", jsonParser, async (req, res) => {
  
  //receber id_paciente
  let { id_paciente } = req.body;
  //select  de delegados
 
  let sql =
    " select  d.id_deleg id,  u.nome nome, md.uf_crm ufCrm, md.crm crm, md.categoria categoria, d.ativo ativo" +
    " from delegacao d, usuario u, med_coord md " +
    " where " +
    " d.id_med_coord=u.id_usuario  " +
    " and d.id_med_coord=md.id_med_coord  " +
    " and d.id_paciente= " + id_paciente
    ;
  

  ordem = " order by nome ";
  sql += ordem;
  //console.log(sql);
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de consulta médicos que não foram delegados
app.post("/consultar_medicos_delegacao", jsonParser, async (req, res) => {
  
  //receber id_paciente
  let { id_paciente } = req.body;
  //select  de delegados
 
  let sql =
    " select  md.id_med_coord id_med_coord,  u.nome nome, md.uf_crm ufCrm, md.crm crm, md.categoria categoria" +
    " from  usuario u, med_coord md " +
    " where " +
    " md.id_med_coord=u.id_usuario  " +
    " and u.tipo != 'coordenador'  " +
    " and u.ativo=1  " +
    " and md.id_med_coord not in (select d.id_med_coord from delegacao d where d.id_paciente= " + id_paciente + " )  " +
    " and md.id_med_coord not in (select p.preceptor from paciente p where p.id_paciente= " + id_paciente + " )  " +
    " and md.id_inst = (select p2.id_inst from paciente p2 where p2.id_paciente= " + id_paciente + " )  " 
    ;
  

  ordem = " order by nome ";
  sql += ordem;
  //console.log(sql);
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de médico delegado
app.post("/incluir_delegacao", jsonParser, async (req, res) => {
  //receber id_med_coord, id_paciente
  let { id_paciente,id_med_coord  } = req.body;
  //definir o sql de inserção
  let sql = "insert into delegacao (id_paciente,id_med_coord) values(?,?)";
  let values = [id_paciente,id_med_coord];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message =
      "Não foi possível delegar reponsabilidade.";
    res.status(status).json({ status, message });
    return;
  }
});

//webservice de exclusão da delegação de acesso
app.post("/excluir_delegacao", jsonParser, async (req, res) => {
  //receber id_delegacao
  let { id_delegacao } = req.body;
  //definir o sql padrão
  let sql = "delete from delegacao where id_deleg = " + id_delegacao;
  let resultado = await delete_mdb(sql);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado });
    return;
  } else {
    const status = 409;
    const message =
      "Não foi possível excluir o acesso delegado.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de cadastro do registro mola  #########################
//webservice de carrega ids dos registros mola da paciente
app.post("/dados_r_mola", jsonParser, async (req, res) => {
  //receber id_paciente

  let { id_paciente } = req.body;
  //definir o sql padrão

  let sql =
    " select id_r_mola from registro_mola " +
    " where " +
    " id_paciente = " + id_paciente + 
    " order by id_r_mola desc";
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de incluir registro mola 
app.post("/incluir_r_mola", jsonParser, async (req, res) => {
  //receber id_paciente, cadastrante (id do médico que está cadastrando o novo registro mola)
  let {
    id_paciente,
    cadastrante
  } = req.body;

  //criptografa a senha
    
  try {
      let sqlRMola =
        "insert into registro_mola ( " +
        " id_paciente, " +
        " pessoa_ult, " +
        " data_ult " +
        " ) values(?, ?, NOW())";

      let valuesRmola = [id_paciente, cadastrante];
      let resultado = await insert_mdb(sqlRMola, valuesRmola);
      if (resultado.affectedRows > 0) {
        
        res.status(200).json({ resultado: [resultado.insertId, valuesRmola] });
        return;
      } else {
        const status = 409;
        const message =
          "Não foi possível incluir os dados do registro mola.";
        
        res.status(status).json({ status, message });
        return;
      }    
  } catch (err) {
    console.log(err);
    throw err;
  } 
});

//################################## tela de cadastro do registro mola - componente de dados gerais  #########################
//webservice de carrega dados gerais do registro mola da paciente
app.post("/dados_r_mola_gerais", jsonParser, async (req, res) => {
  //receber id_r_mola

  let { id_r_mola } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " idade, " +
    " peso, " +
    " altura, " +
    " imc, " +
    " term_caso, " +
    " date_format(dum_consulta,'%Y-%m-%d') dum_consulta," +
    " id_cid, " +
    " obs " +
    " from registro_mola " +
    " where " +
    " id_r_mola = " + id_r_mola;
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de alterar dados gerais do registro mola da paciente
app.post("/gravar_r_mola_gerais", jsonParser, async (req, res) => {
  //receber dados para alterar
  let {
    idade,
    peso,
    altura,
    imc,
    term_caso,
    dum_consulta,    
    id_cid,
    obs,
    id_r_mola
  } = req.body;

  //alterar resgitro mola
  let sql =
    "update registro_mola set " +
    " idade  = ?, " +
    " peso = ?, " +
    " altura = ?, " +
    " imc = ?, " +
    " term_caso = ?, " +
    " dum_consulta = ?, " + 
    " id_cid = ?, " +
    " obs = ? " +    
    " where id_r_mola = ? ";
  let values = [idade, peso, altura, imc, term_caso, dum_consulta, id_cid, obs, id_r_mola ];
  //console.log('values',values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "dados gerais gravados com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível gravar os dados gerais ";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de cadastro do registro mola - componente partos  #########################
//webservice de carrega dados dos partos previos do registro mola da paciente
app.post("/dados_r_mola_partos", jsonParser, async (req, res) => {
  //receber id_r_mola

  let { id_r_mola } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " n_partos, " +
    " mola_prev, " +
    " abortos, " +
    " ecto " +
    " from registro_mola " +
    " where " +
    " id_r_mola = " + id_r_mola;
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de alterar dados dos partos previos do registro mola da paciente
app.post("/gravar_r_mola_partos", jsonParser, async (req, res) => {
  //receber dados para alterar
  let {
    n_partos,
    mola_prev,
    abortos,
    ecto,
    id_r_mola
  } = req.body;

  //alterar resgitro mola
  let sql =
    "update registro_mola set " +
    " n_partos  = ?, " +
    " mola_prev = ?, " +
    " abortos = ?, " +
    " ecto = ? " +    
    " where id_r_mola = ? ";
  let values = [n_partos, mola_prev, abortos, ecto, id_r_mola];
  //console.log('values',values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "dados de gestações prévias gravados com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível gravar os dados de gestações prévias ";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de cadastro do registro mola - componente esvaziamentos  #########################
//webservice de carrega dados dos esvaziamentos do registro mola da paciente
app.post("/dados_r_mola_esvaz", jsonParser, async (req, res) => {
  //receber id_r_mola

  let { id_r_mola } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " date_format(dum_data,'%Y-%m-%d') dum_data, " +
    " date_format(data_esvaz1,'%Y-%m-%d') data_esvaz1, " +
    " ig_esvaz1, " +
    " tipo_esvaz1, " +
    " local_esvaz1, " +
    " hosp_esvaz1, " +
    " nat_hosp_esvaz1, " +
    " date_format(data_esvaz2,'%Y-%m-%d') data_esvaz2, " +
    " interv_esvaz, " +
    " id_mac_antes, " +
    " id_mac_apos " +    
    " from registro_mola " +
    " where " +
    " id_r_mola = " + id_r_mola;
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de alterar dados dos esvaziamentos do registro mola da paciente
app.post("/gravar_r_mola_esvaz", jsonParser, async (req, res) => {
  //receber dados para alterar
  let {
    dum_data,
    data_esvaz1,
    ig_esvaz1,
    tipo_esvaz1,
    local_esvaz1,
    hosp_esvaz1,
    nat_hosp_esvaz1,
    data_esvaz2,
    interv_esvaz,
    id_mac_antes,
    id_mac_apos,
    id_r_mola
  } = req.body;

  //alterar resgitro mola
  let sql =
    "update registro_mola set " +
    " dum_data  = ?, " +
    " data_esvaz1 = ?, " +
    " ig_esvaz1 = ?, " +
    " tipo_esvaz1 = ?, " +
    " local_esvaz1 = ?, " +
    " hosp_esvaz1 = ?, " +
    " nat_hosp_esvaz1 = ?, " +
    " data_esvaz2 = ?, " +
    " interv_esvaz = ?, " +
    " id_mac_antes = ?, " +
    " id_mac_apos = ? " +
    " where id_r_mola = ? ";
  let values = [dum_data, data_esvaz1, ig_esvaz1, tipo_esvaz1, local_esvaz1, hosp_esvaz1, nat_hosp_esvaz1, data_esvaz2, interv_esvaz, id_mac_antes, id_mac_apos, id_r_mola];
  //console.log('values',values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "dados dos esvaziamentos gravados com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível gravar os dados dos esvaziamentos ";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de cadastro do registro mola - componente dados clinicos  #########################
//webservice de carrega dados clinicos do registro mola da paciente
app.post("/dados_r_mola_clinicos", jsonParser, async (req, res) => {
  //receber id_r_mola

  let { id_r_mola } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " sangramento, " +
    " hb, " +
    " pressao_alta, " +
    " tsh_disp, " +
    " format(tsh_valor,1) tsh_valor," +
    " beta, " +
    " cistos, " +
    " utero_ig, " +
    " raiox, " +
    " ntg, " +    
    " us, " +
    " entrada_servico " + 
    " from registro_mola " +
    " where " +
    " id_r_mola = " + id_r_mola;
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de alterar dados clinicos do registro mola da paciente
app.post("/gravar_r_mola_clinicos", jsonParser, async (req, res) => {
  //receber dados para alterar
  let {
    sangramento,
    hb,
    pressao_alta,
    tsh_disp,
    tsh_valor,
    beta,
    cistos,
    utero_ig,
    raiox,
    ntg,
    us,
    entrada_servico,
    id_r_mola
  } = req.body;

  //alterar resgitro mola
  let sql =
    "update registro_mola set " +
    " sangramento  = ?, " +
    " hb = ?, " +
    " pressao_alta = ?, " +
    " tsh_disp = ?, " +
    " tsh_valor = ?, " +
    " beta = ?, " +
    " cistos = ?, " +
    " utero_ig = ?, " +
    " raiox = ?, " +
    " ntg = ?, " +
    " us = ?, " +
    " entrada_servico = ? " +
    " where id_r_mola = ? ";
  let values = [sangramento, hb, pressao_alta, tsh_disp, tsh_valor, beta, cistos, utero_ig, raiox, ntg, us, entrada_servico, id_r_mola];
  //console.log('values',values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "os dados clínicos foram gravados com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível gravar os dados clínicos ";
    res.status(status).json({ status, message });
    return;
  }
});
//################################## tela de CHAT ######################### ***** tela descontinuada ****

//webservice de consultar responsáveis do paciente
app.post("/consultar_destinatarios", jsonParser, async (req, res) => {
  
  //receber id_med_coord,nome,cpf, preceptor,terminoCaso
  let { id_med_coord,nome,cpf, preceptor} = req.body;
  //select  de pecientes que médico possui alguma responsabilidade
 
  let sql =
    " select	" +
    "  u.nome nome,	" +
    "  u.cpf, " +
    "  u.id_usuario id_usuario, " +
    "  p.id_inst id_inst, " +
    "  p.preceptor id_preceptor, " +
    "  u2.nome nome_preceptor, " +
    "  DATE_FORMAT((select max(data) from mensagens m  where remetente = p.id_paciente),'%d/%m/%Y %T') ultima_paciente, " +
    "  DATE_FORMAT((select max(data) from mensagens m  where destinatario = p.id_paciente),'%d/%m/%Y %T') ultima_medico " +
    " from " +
    "  usuario u, " +
    "  paciente p, " +
    "  usuario u2 " +
    " where" +
    " 	u.id_usuario=p.id_paciente and " +
    " 	p.preceptor=u2.id_usuario and " +
    " 	u.ativo=1 and " +
    " 	p.id_paciente in (select r.id_paciente from responsaveis r where id_med_coord=" + id_med_coord + ") ";
  let where = "";
  if (nome != "") {
    where += " and UPPER(u.nome) like UPPER('%" + nome + "%') ";
  }

  if (cpf != "") {
    where += " and u.cpf = " + cpf + " ";
  }

  if (preceptor != "") {
    where += " and UPPER(u2.nome) like UPPER('%" + preceptor + "%') ";
  }

  sql += where;
  ordem = " order by  ultima_paciente desc ";
  sql += ordem;
  //console.log(sql);
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//##############################################################################Tela de Upload de imagens###############################################################################################
//webservice de upload
app.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm()

    form.uploadDir = folder
    form.parse(req, async (err, fields, files) => {
      //console.log('\n-----------')      
      //console.log('Fields', fields)
      //console.log('files', files[Object.keys(files)[0]].name.split('.').pop())
      
      let extensaoDoArquivo = files[Object.keys(files)[0]].name.split('.').pop()
      let arquivoSemId = path.join(folder, (fields.id_r_mola + fields.tipo))
        //console.log('Received:', files[undefined].path)
        //console.log('Received:', files[undefined].name)
      //console.log()
      
      try {

        //neste inser o nome do arquivo é composto do arquivoSemId(caminho + id_r_mola + tipo) + (o ultimo id da tabela imagens + 1) + extensão
        let sqlImagens =
          " INSERT INTO dtg.imagens "+
          " (tp_exam, url_img, data_upload, id_r_mola) "+
          " VALUES (?, concat(?,(select nvl(max(i.id_imagem),0) + 1 from dtg.imagens i),'.',?), NOW(), ?)";
        let valuesImagens = [fields.tipo, arquivoSemId, extensaoDoArquivo, fields.id_r_mola];
       // console.log('sql', sqlImagens);
       // console.log('values', valuesImagens);
        let resultado = await insert_mdb(sqlImagens, valuesImagens);
        if (resultado.affectedRows > 0) {
            const oldpath = files[Object.keys(files)[0]].path;
            const newpath = arquivoSemId+resultado.insertId+'.'+extensaoDoArquivo 
            //console.log('oldpath:', oldpath)
            //console.log('Received:', newpath)
            fs.renameSync(oldpath, newpath);
            
            res.status(200).json({ id_imagem: [resultado.insertId] });
            return;
          } else {
            const status = 409;
            const message =
              "Não foi possível incluir os dados do registro mola.";
            
            res.status(status).json({ status, message });
            return;
          }    
      } catch (err) {
        console.log(err);
        throw err;
      }
    })
})


//webservice de retorno de imagem
app.get('/arquivo/:id', jsonParser, async (req, res) => {
  if (!isNaN(req.params.id)) {
    let sqlArquivo = "select url_img from imagens where id_imagem = " + req.params.id
    let resultado = await select_mdb(sqlArquivo);
  //console.log('senha cripto:', senha)
  //console.log('senha_banco:',senha_banco[0].senha)
    if (typeof resultado[0] == "undefined") {
      const status = 409;
      const message = "Imagem não encontrada";
      res.status(status).json({ status, message });
      return;
    }
    const r = fs.createReadStream(resultado[0].url_img) // or any other way to get a readable stream
    const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
    stream.pipeline(
      r,
      ps, // <---- this makes a trick with stream error handling
      (err) => {
        if (err) {
          console.log(err) // No such file or any other kind of error
          return res.sendStatus(409); 
        }
      })
    ps.pipe(res) 
    return;
  }
  else {
    const status = 409;
    const message = "id inválido";
    res.status(status).json({ status, message });
    return;
  }
})


//################################## tela de consulta de hCG #########################
//webservice de consultar hCG
app.post("/consultar_hcg", jsonParser, async (req, res) => {
  //receber id_r_mola

  let { id_r_mola } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " h.id_hcg id_hcg, " +
    " DATE_FORMAT(h.data_hcg,'%d/%m/%Y') data_hcg, " +
    " h.result_hcg result_hcg, " +
    " h.lab_hcg lab_hcg, " +
    " h.id_imagem id_imagem, " +
    " u2.nome revisor, " +
    " u.nome cadastrante " +    
    " from hcg h " +
    " join usuario u on h.cadastrante=u.id_usuario " +
    " left join usuario u2 on h.revisor=u2.id_usuario " +
    " where " +
    " h.id_r_mola = " + id_r_mola +
    " order by id_hcg ";

  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de exclusão de hcg
app.post("/excluir_hcg", jsonParser, async (req, res) => {
  //receber id_hcg
  let { id_hcg } = req.body;
  //definir o sql padrão
  let sql = "delete from hcg where id_hcg = " + id_hcg;
  let resultado = await delete_mdb(sql);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível excluir os dados do hCG.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Cadastro de hCG #########################
//webservice de incluir hCG
app.post("/incluir_hcg", jsonParser, async (req, res) => {
  //receber dados para inclusão
  let {
    data_hcg,
    result_hcg,
    lab_hcg,
    id_imagem,
    cadastrante
  } = req.body;
  //definir o sql padrão
  let sql =
    "insert into hcg ( " +
    " data_hcg, " +
    " result_hcg, " +
    " lab_hcg, " +
    " id_imagem, " +
    " cadastrante " +
    " ) values (?,?,?,?)";
  let values = [data_hcg, result_hcg, lab_hcg, id_imagem, cadastrante];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível incluir os dados do hCG.";
    res.status(status).json({ status, message });
    return;
  }
});

//webservice de carrega dados de um exame de hCG
app.post("/dados_hcg", jsonParser, async (req, res) => {
  //receber id_r_mola
  let { id_hcg } = req.body;
  //definir o sql padrão
  let sql =
    " select " +
    " h.id_hcg id_hcg, " +
    " DATE_FORMAT(h.data_hcg,'%d/%m/%Y') data_hcg, " +
    " h.result_hcg result_hcg, " +
    " h.lab_hcg lab_hcg, " +
    " h.id_imagem id_imagem, " +
    " h.revisor id_revisor, " +
    " u2.nome revisor, " +
    " h.cadastrante id_cadastrante, " +
    " u.nome cadastrante " +    
    " from hcg h " +
    " join usuario u on h.cadastrante=u.id_usuario " +
    " left join usuario u2 on h.revisor=u2.id_usuario " +
    " where " +
    " h.id_hcg = " + id_hcg ;
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de alterar hCG
app.post("/alterar_hcg", jsonParser, async (req, res) => {
  //receber dados para alterar
  let {
    data_hcg,
    result_hcg,
    lab_hcg,
    id_imagem,
    id_hcg
  } = req.body;

  
  let sql =
    "update hcg set " +
    " data_hcg  = ?, " +
    " result_hcg = ?, " +
    " lab_hcg = ?, " +
    " id_imagem = ? " +
    " where id_hcg = ? ";
  let values = [data_hcg, result_hcg, lab_hcg, id_imagem, id_hcg];
  //console.log('sql',sql)
  //console.log('values', values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "hCG alterada com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível alterar o hCG ";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de consulta de Raio X (raiox - rx) #########################
//webservice de consultar Raio x
app.post("/consultar_raiox", jsonParser, async (req, res) => {
  //receber id_r_mola

  let { id_r_mola } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " r.id_raiox id_raiox, " +
    " DATE_FORMAT(r.data_raiox,'%d/%m/%Y') data_raiox, " +    
    " r.id_imagem id_imagem, " +
    " u2.nome revisor, " +
    " u.nome cadastrante " +    
    " from raiox r " +
    " join usuario u on r.cadastrante=u.id_usuario " +
    " left join usuario u2 on r.revisor=u2.id_usuario " +
    " where " +
    " r.id_r_mola = " + id_r_mola +
    " order by id_raiox ";

  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de exclusão de raiox
app.post("/excluir_raiox", jsonParser, async (req, res) => {
  //receber id_raiox
  let { id_raiox } = req.body;
  //definir o sql padrão
  let sql = "delete from raiox where id_raiox = " + id_raiox;
  let resultado = await delete_mdb(sql);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível excluir os dados do Raio-X.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Cadastro de Raio-X (raiox rx)  #########################
//webservice de incluir raiox
app.post("/incluir_raiox", jsonParser, async (req, res) => {
  //receber dados para inclusão
  let {
    data_raiox,    
    id_imagem,
    cadastrante
  } = req.body;
  //definir o sql padrão
  let sql =
    "insert into raiox ( " +
    " data_raiox, " +   
    " id_imagem, " +
    " cadastrante " +
    " ) values (?,?,?)";
  let values = [data_raiox, id_imagem, cadastrante];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível incluir os dados do Raio-X.";
    res.status(status).json({ status, message });
    return;
  }
});

//webservice de carrega dados de um exame de Raio-X
app.post("/dados_raiox", jsonParser, async (req, res) => {
  //receber id_raiox
  let { id_raiox } = req.body;
  //definir o sql padrão
  let sql =
    " select " +
    " r.id_raiox id_raiox, " +
    " DATE_FORMAT(r.data_raiox,'%d/%m/%Y') data_raiox, " +
    " r.id_imagem id_imagem, " +
    " r.revisor id_revisor, " +
    " u2.nome revisor, " +
    " r.cadastrante id_cadastrante, " +
    " u.nome cadastrante " +    
    " from raiox r " +
    " join usuario u on r.cadastrante=u.id_usuario " +
    " left join usuario u2 on r.revisor=u2.id_usuario " +
    " where " +
    " r.id_raiox = " + id_raiox ;
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de alterar Raio-X
app.post("/alterar_raiox", jsonParser, async (req, res) => {
  //receber dados para alterar
  let {
    data_raiox,    
    id_imagem,
    id_raiox
  } = req.body;

  
  let sql =
    "update raiox set " +
    " data_raiox  = ?, " +    
    " id_imagem = ? " +
    " where id_raiox = ? ";
  let values = [data_raiox, id_imagem, id_raiox];
  //console.log('sql',sql)
  //console.log('values', values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "Raio-X alterado com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível alterar o Raio-X ";
    res.status(status).json({ status, message });
    return;
  }
});


//################################## tela de consulta de ultrassom #########################
//webservice de consultar ultrassom
app.post("/consultar_ultrassom", jsonParser, async (req, res) => {
  //receber id_r_mola

  let { id_r_mola } = req.body;
  //definir o sql padrão

  let sql =
    " select " +
    " ul.id_ultrassom id_ultrassom, " +
    " DATE_FORMAT(ul.data_ultrassom,'%d/%m/%Y') data_ultrassom, " +    
    " ul.ultrassom ultrassom, " +
    " ul.laudo_ultrassom laudo_ultrassom, " +
    " u2.nome revisor, " +
    " u.nome cadastrante " +    
    " from ultrassom ul " +
    " join usuario u on ul.cadastrante=u.id_usuario " +
    " left join usuario u2 on ul.revisor=u2.id_usuario " +
    " where " +
    " ul.id_r_mola = " + id_r_mola +
    " order by id_ultrassom ";

  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});
/*
//webservice de exclusão de raiox
app.post("/excluir_raiox", jsonParser, async (req, res) => {
  //receber id_raiox
  let { id_raiox } = req.body;
  //definir o sql padrão
  let sql = "delete from raiox where id_raiox = " + id_raiox;
  let resultado = await delete_mdb(sql);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível excluir os dados do Raio-X.";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de Cadastro de Raio-X (raiox rx)  #########################
//webservice de incluir raiox
app.post("/incluir_raiox", jsonParser, async (req, res) => {
  //receber dados para inclusão
  let {
    data_raiox,    
    id_imagem,
    cadastrante
  } = req.body;
  //definir o sql padrão
  let sql =
    "insert into raiox ( " +
    " data_raiox, " +   
    " id_imagem, " +
    " cadastrante " +
    " ) values (?,?,?)";
  let values = [data_raiox, id_imagem, cadastrante];
  let resultado = await insert_mdb(sql, values);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: [values, resultado.insertId] });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível incluir os dados do Raio-X.";
    res.status(status).json({ status, message });
    return;
  }
});

//webservice de carrega dados de um exame de Raio-X
app.post("/dados_raiox", jsonParser, async (req, res) => {
  //receber id_raiox
  let { id_raiox } = req.body;
  //definir o sql padrão
  let sql =
    " select " +
    " r.id_raiox id_raiox, " +
    " DATE_FORMAT(r.data_raiox,'%d/%m/%Y') data_raiox, " +
    " r.id_imagem id_imagem, " +
    " r.revisor id_revisor, " +
    " u2.nome revisor, " +
    " r.cadastrante id_cadastrante, " +
    " u.nome cadastrante " +    
    " from raiox r " +
    " join usuario u on r.cadastrante=u.id_usuario " +
    " left join usuario u2 on r.revisor=u2.id_usuario " +
    " where " +
    " r.id_raiox = " + id_raiox ;
  
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de alterar Raio-X
app.post("/alterar_raiox", jsonParser, async (req, res) => {
  //receber dados para alterar
  let {
    data_raiox,    
    id_imagem,
    id_raiox
  } = req.body;

  
  let sql =
    "update raiox set " +
    " data_raiox  = ?, " +    
    " id_imagem = ? " +
    " where id_raiox = ? ";
  let values = [data_raiox, id_imagem, id_raiox];
  //console.log('sql',sql)
  //console.log('values', values)
  let resultado = await update_mdb(sql, values);
  //console.log(resultado)
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: "Raio-X alterado com sucesso" });
    return;
  } else {
    const status = 409;
    const message = "Não foi possível alterar o Raio-X ";
    res.status(status).json({ status, message });
    return;
  }
});

*/

//*****************************************************************************APP MOLA PACIENTE***************************************************************************************** */
//##############################################################################Tela de login do paciente###############################################################################################

//webservice de login do paciente
app.post("/auth/login_paciente", jsonParser, async (req, res) => {
  //receber login e senha
  //console.log(req.body)
  const { login, senha } = req.body;
  
  //fazer select no banco de dados
  var credenciais_corretas = await pacienteEstaAutenticado({ login, senha });
  if (credenciais_corretas === false) {
    const status = 401;
    const message = "Login ou senha incorretos!";
    res.status(status).json({ status, message });
    return;
  }
  //criar o token de acesso
  const access_token = criarToken({ login, senha });
  //retornar o usuario e o token
  console.log(login + " está logado");
  res.status(200).json({ access_token, credenciais: credenciais_corretas });
});

//################################## tela de termo de aceite do paciente #########################
//webservice de aceite do paciente
app.post("/auth/aceite_paci", jsonParser, async (req, res) => {
  //receber id_usuario
  //console.log(req.body)
  const { id_usuario } = req.body;
  //console.log(id_usuario)
  //fazer o update do aceite no banco de dados
  sql = "update paciente set aceite=1 where id_paciente= ? ";
  let resultado = await update_mdb(sql, [id_usuario]);
  //console.log(resultado);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 409;
    const message = "Não foi possivel fazer o aceite, usuário não encontrado!";
    res.status(status).json({ status, message });
    return;
  }
});
//################################## tela de alteração de senha #########################
//webservice de alterar senha do paciente
app.post("/auth/alterar_senha_paciente", jsonParser, async (req, res) => {
  //receber login, senha, nova_senha
  //console.log(req.body)
  let { login, senha, nova_senha } = req.body;
  //verificar se as cedenciais estão corretas
  var credenciais_corretas = await pacienteEstaAutenticado({ login, senha });
  if (credenciais_corretas === false) {
    const status = 401;
    const message = "Login ou senha incorretos!";
    res.status(status).json({ status, message });
    return;
  }
  //pega o id do usuario
  id_usuario = credenciais_corretas.id_usuario;
  //criptografa a senha
  nova_senha = hash.reset().update(nova_senha).digest("hex");
  //alterar a senha no banco de dados
  sql = "update usuario set senha = ? where id_usuario= ?";
  let resultado = await update_mdb(sql, [nova_senha, id_usuario]);

  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 409;
    const message = "Não foi possivel alterar a senha!";
    res.status(status).json({ status, message });
    return;
  }
});

//################################## tela de sobre #########################

//webservice de consultar responsáveis do paciente
app.post("/consultar_responsaveis_paci", jsonParser, async (req, res) => {
  
  //receber id_paciente
  let { id_paciente } = req.body;
  //select  de delegados
 
  let sql =
    " select  md.id_med_coord id_med_coord,  u.nome nome, md.uf_crm ufCrm, md.crm crm, md.categoria categoria, u.tipo tipo" +
    " from  usuario u, med_coord md " +
    " where " +
    " md.id_med_coord=u.id_usuario  " +    
    " and u.ativo=1  " +
    " and md.id_med_coord in (select r.id_med_coord from responsaveis r where r.id_paciente= " + id_paciente + " )  " 
    
    ;
  

  ordem = " order by nome ";
  sql += ordem;
  //console.log(sql);
  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});


//################################## dados para Combobox #########################
//webservice de combo de Instituições
app.get("/combo_inst", jsonParser, async (req, res) => {
  //definir o sql padrão
  let sql =
    " select id_inst id, nome_inst " +
    " from instituicao " +
    " where  ativo = 1 " +
    " order by nome_inst ";

  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});

//webservice de combo de CID
app.get("/combo_cid", jsonParser, async (req, res) => {
  //definir o sql padrão
  let sql =
    " select id_cid, cod_cid, descricao " +
    " from cid " +
    " where  ativo = 1 " +
    " order by descricao ";

  let resultado = await select_mdb(sql);

  res.status(200).json({ resultado });
});
  
server.listen(port, () => {
  console.log(`DTG server em http://localhost:${port}`);
});
