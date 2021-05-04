//################### Importação da bibliotecas ############
var express = require("express");
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
const git = simpleGit();

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
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}

//faz update no banco no banco de dados
async function update_mdb(sql) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql);
    //console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
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
    throw err;
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
app.use(cors());
//verifica token de acesso se a página precisar de autenticação
app.use(/^(?!\/auth).*$/, (req, res, next) => {
  //console.log('headers: ',req.headers);

  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
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

// Alo mundo
app.get("/", function (req, res) {
  res.send("Alo mundo!!!<br/> <b>Servidor DTG </b> alterado Capa2");
});

//################################## webservices #########################
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
  sql = "update med_coord set aceite=1 where id_med_coord=" + id_usuario;
  let resultado = await update_mdb(sql);
  //console.log(resultado);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 404;
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
  sql =
    "update usuario set senha='" +
    nova_senha +
    "' where id_usuario=" +
    id_usuario;
  let resultado = await update_mdb(sql);

  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 404;
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
  /*
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
    login, */
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
  sql =
    "update usuario set ativo='" + valor + "' where id_usuario=" + id_usuario;
  let resultado = await update_mdb(sql);

  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return;
  } else {
    const status = 404;
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
  //incluir usuario

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
  let resultado = await insert_mdb(sql, values);
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
    let resultado2 = await insert_mdb(sqlMed, valuesMed);
    if (resultado2.affectedRows > 0) {
      res.status(200).json({ resultado: [values, valuesMed] });
      return;
    } else {
      const status = 404;
      const message = "Não foi possível incluir os dados do médico.";
      res.status(status).json({ status, message });
      return;
    }
  } else {
    const status = 404;
    const message = "Não foi possível incluir o usuario do médico.";
    res.status(status).json({ status, message });
    return;
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
    "update usuario set nome = '" +
    nome +
    "'," +
    "tipo = '" +
    tipoAcesso +
    "'," +
    "cep = '" +
    cep +
    "'," +
    "uf_resid = '" +
    uf +
    "'," +
    "cidade = '" +
    cidade +
    "'," +
    "num_resid = '" +
    numero +
    "'," +
    "complemento = '" +
    complemento +
    "'," +
    "logradouro = '" +
    logradouro +
    "'," +
    "bairro = '" +
    bairro +
    "'," +
    "cpf = '" +
    cpf +
    "'," +
    "dt_nasc = '" +
    dataNasc +
    "'," +
    "login = '" +
    login +
    "' where id_usuario = " +
    id_usuario;

  //console.log('values',values)
  let resultado = await update_mdb(sql);
  //console.log(resultado)
  //se deu certo tenta incluir em medCoord
  if (resultado.affectedRows > 0) {
    let sqlMed =
      "update med_coord set crm = '" +
      crm +
      "'," +
      "uf_crm = '" +
      ufCrm +
      "'," +
      "categoria = '" +
      categoria +
      "'," +
      "id_inst = '" +
      instituicao +
      "'" +
      " where id_med_coord = " +
      id_usuario;
    //console.log(sqlMed)
    let resultado2 = await update_mdb(sqlMed);
    if (resultado2.affectedRows > 0) {
      res.status(200).json({ resultado: [req.body, resultado, resultado2] });
      return;
    } else {
      const status = 404;
      const message = "Não foi possível alterar os dados do médico.";
      res.status(status).json({ status, message });
      return;
    }
  } else {
    const status = 404;
    const message = "Não foi possível incluir o usuario do médico.";
    res.status(status).json({ status, message });
    return;
  }
});
//################################## tela de MAC #########################
//webservice de consultar MAC (Método anti Concepcional)
app.post("/consultar_mac", jsonParser, async (req, res) => {
  //receber descricao
  let { descricao } = req.body;
  //definir o sql padrão
  let sql = " select id_mac id, descricao " + " from mac ";
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

//################################## tela de Intituição #########################
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
    " complemento_inst complemento " +
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

//################################## tela de Indicação #########################
//webservice de consultar Indicação
app.post("/consultar_indicacao", jsonParser, async (req, res) => {
  //receber descricao
  let { descricao } = req.body;
  //definir o sql padrão
  let sql = " select id_indicacao id, descricao " + " from indicacao ";
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

//################################## tela de consulta de Instituições #########################
//webservice de consultar MAC (Método anti Concepcional)
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

//################################## tela de Anatomia Patológica #########################
//webservice de consulta anatomia patológica
app.post("/consultar_ap", jsonParser, async (req, res) => {
  //receber descrição da anatomia patológica
  let { descricao } = req.body;
  let sql = " select id_resultado_ap id, descricao " + " from resultado_ap ";
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

//################################## tela de consulta de pacientes #########################
//webservice de consultar pacientes
app.post("/consultar_pacientes", jsonParser, async (req, res) => {
  //receber nome, cpf, preceptor, termino_caso, situacao,categoria
  let { nome, cpf, preceptor, term_caso, id_inst } = req.body;
  let sql =
    " select u.id_usuario id_usuario, u.nome nome_paciente, u2.nome nome_preceptor, u.ativo ativo, u.cpf cpf, rm.term_caso term_caso, cast(rm.term_caso as int) id_term_caso  " +
    " from usuario u,paciente p, usuario u2, registro_mola rm " +
    " where " +
    " u.id_usuario=p.id_paciente  " +
    " and p.id_paciente=rm.id_paciente  " +
    " and p.preceptor=u2.id_usuario  " +
    " and p.id_inst= " +
    id_inst;
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
app.listen(port, () => {
  console.log(`DTG server em http://localhost:${port}`);
});

//################################## tela de cadastro de pacientes  #########################
//webservice de incluir paciente
app.post("/incluir_med_coord", jsonParser, async (req, res) => {
  //receber nome,dataNasc, cpf, nomeMae, cep,logradouro, numero,complemento, uf, cidade, bairro, ufCrm,crm,  categoria,instituicao,tipoAcesso,login,  senha

  /*
  nome
  dataNasc
  cpf
  nomeMae
  cep
  logradouro: "",
  numero: "",
  complemento: "",
  uf: "",
  cidade: "",
  bairro: "",
  sus: "",
  rh: "",
  instituicao: "",
  cor: "",
  escoladoridade: "",
  tipoSanguineo: "",
  fatorRh: "",
  indicacao: "",
  instituicao: "",
  estadoCivil: "",
  outros: "",        
  telefoneProprio - 
  telefoneContato -
  nomeContato - 
  email - 
  reacoesAlergicas -
  preceptor -  
  rg: - 
  rne - 
  nacionalidade -
  login 
  */
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
    cadastrante
  } = req.body;
  
  //criptografa a senha
  let senha = hash.reset().update(login).digest("hex");
  //incluir usuario

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
    senha
  ];
  //console.log('values',values)
  let resultado = await insert_mdb(sql, values);
  //console.log(resultado)
  //se deu certo tenta incluir em medCoord
  if (resultado.affectedRows > 0) {
    let sqlPaci =
      "insert into pacientes ("+
      "sus, "+
      "rh, "+
      "cor, "+
      "tipo_sanguineo, "+
      "rh_tipo_sanguineo, "+
      "tel_proprio, "+
      "tel_contato, "+
      "nome_contato, "+
      "reacoes_alergicas, "+
      "estado_civil, "+
      "nome_mae, "+
      "escolaridade, "+
      "email, "+
      "rne, " +
      "rg, "+
      "nacionalidade, "+        
      "id_paciente, "+
      "id_indicacao, "+
      "preceptor, "+
      "id_inst)" +
      ") values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
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
      instituicao
    ];
    let resultado2 = await insert_mdb(sqlPaci, valuesPaci);
    if (resultado2.affectedRows > 0) {
      let sqlRMola =
        "insert into registro_mola (" +
        "id_paciente, " +
        "pessoa_ult," +
        "data_ult," +       
        ") values(?, ?, NOW())";
      
      let valuesRmola = [
        resultado.insertId,
        cadastrante
      ];
      let resultado3 = await insert_mdb(sqlRMola, valuesRmola);
      if (resultado3.affectedRows > 0) {
        res.status(200).json({ resultado: [values, valuesPaci] });
        return;
      }
      else {
        const status = 404;
        const message = "Não foi possível incluir os dados do registro mola do paciente.";
        res.status(status).json({ status, message });
        return;
      }
    } else {
      const status = 404;
      const message = "Não foi possível incluir os dados do paciente.";
      res.status(status).json({ status, message });
      return;
    }
  } else {
    const status = 404;
    const message = "Não foi possível incluir o usuario do paciente.";
    res.status(status).json({ status, message });
    return;
  }
});