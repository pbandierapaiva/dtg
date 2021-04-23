//################### Importação da bibliotecas ############
var express = require('express');
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const mariadb = require('mariadb');
const { SHA3 } = require('sha3');
//################### configurações ########################
//configuração do banco dedados
const dbvar = require('./dtg.json');
const pool = mariadb.createPool({
    host: dbvar.server,
    user: dbvar.user,
    password: dbvar.password,
    database: dbvar.db
});
//configuração do servidor
var jsonParser = bodyParser.json()
var app = express();
const port = 8793
//contantes para token de acesso
const SECRET_KEY = '862475391'
const expiresIn = '12h'
//configuração para criptografia sha-3 224
const hash = new SHA3(224);
// Para colocar em execução no servidor
var sleep = require('sleep');
const pm2 = require('pm2')

//configuração do git
const simpleGit = require('simple-git');
const git = simpleGit();

//################# funções #####################

//faz select no banco de dados
async function select_mdb(sql) {
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
      if (conn) { conn.end(); }
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
      if (conn) { conn.end(); }
    }
}

//cria token de acesso
function criarToken(payload){
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}
//verifica token de acesso
function verificaToken(token){
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);
}
//verifica se o login e senha do medico estão corretos
async function medEstaAutenticado({ login, senha }) {
  console.log('senha:', senha)
  senha = hash.reset().update(senha).digest('hex');
  sql =
    " select u.senha senha,u.tipo tipo, u.nome nome, mc.categoria categoria, CONCAT(mc.uf_crm,' ',mc.crm) crm, mc.aceite aceite, u.id_usuario id_usuario  " +
    " from usuario u, med_coord mc " +
    " where " +
    " u.id_usuario=mc.id_med_coord and "+
    " u.login = '" + login + "' ";
  
  let senha_banco = await select_mdb(sql);
  console.log('senha cripto:', senha)
  console.log('senha_banco:',senha_banco[0].senha)
  if (typeof senha_banco[0] == 'undefined') {
    return false;
  }
  if (senha == senha_banco[0].senha) {
    const usuario = {login: login,nome: senha_banco[0].nome ,tipo: senha_banco[0].tipo,categoria: senha_banco[0].categoria, crm: senha_banco[0].crm, aceite: senha_banco[0].aceite, id_usuario: senha_banco[0].id_usuario}
    return usuario;
  }
  else {
    return false;
  }  
}

//################# servidor ###########################
app.get('/deploy', function(req, res) {
	git.pull().pull('origin', 'master', {'--rebase': 'true'})
	sleep.sleep(5);
	res.redirect('/');
});
app.get('/pmstatus', function(req, res) {
	pm2.connect(errback);
	res.send( pm2.list(errback) );
	pm2.disconnect();
});
//verifica token de acesso se a página precisar de autenticação
app.use(/^(?!\/auth).*$/,  (req, res, next) => {
  //console.log('headers: ',req.headers);
  
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Token inválido'
    res.status(status).json({status, message})
    return
  }
  try {
    let verificaResultadoToken;
     verificaResultadoToken = verificaToken(req.headers.authorization.split(' ')[1]);
     console.log('verificaResultadoToken: ',verificaResultadoToken);
     if (verificaResultadoToken instanceof Error) {
       const status = 401
       const message = 'Token de autenticação não encontrado'
       res.status(status).json({status, message})
       return
     }
     next()
  } catch (err) {
    const status = 401
    const message = 'Token revogado'
    res.status(status).json({status, message})
  }
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Alo mundo
app.get('/', function(req, res) {
  res.send('Alo mundo!!!<br/> <b>Servidor DTG </b> alterado Capa2');
});

//################################## webservices #########################
//webservice de login
app.post('/auth/login',jsonParser,async (req, res) => {
	//receber login e senha	
  //console.log(req.body)
	const { login, senha } = req.body;		
	
	//fazer select no banco de dados
  var credenciais_corretas = await medEstaAutenticado({login, senha})  
  if (credenciais_corretas === false) {
    const status = 401
    const message = 'Login ou senha incorretos!'
    res.status(status).json({status, message})
    return
  }
	//criar o token de acesso
  const access_token = criarToken({login, senha})
	//retornar o usuario e o token 
  console.log(login + " está logado");
  res.status(200).json({ access_token, credenciais: credenciais_corretas });
})

//webservice de aceite do médico ou coordenador
app.post('/auth/aceite_med', jsonParser, async (req, res) => {
  //receber id_usuario
  console.log(req.body)
  const { id_usuario } = req.body;
  console.log(id_usuario)
  //fazer o update do aceite no banco de dados
  sql ="update med_coord set aceite=1 where id_med_coord="+id_usuario
  let resultado = await update_mdb(sql);
  console.log(resultado);
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return
  }
  else {
    const status = 404
    const message = 'Não foi possivel fazer o aceite, usuário não encontrado!';
    res.status(status).json({status, message})
    return
  }
})

//webservice de alterar senha do médico ou coordenador
app.post('/auth/alterar_senha_med', jsonParser, async (req, res) => {
  //receber login, senha, nova_senha
  console.log(req.body)
  let { login, senha, nova_senha } = req.body;
  //verificar se as cedenciais estão corretas
  var credenciais_corretas = await medEstaAutenticado({login, senha})  
  if (credenciais_corretas === false) {
    const status = 401
    const message = 'Login ou senha incorretos!'
    res.status(status).json({status, message})
    return
  }
  //pega o id do usuario
  id_usuario = credenciais_corretas.id_usuario;
  //criptografa a senha
  nova_senha =hash.reset().update(nova_senha).digest('hex');;
  //alterar a senha no banco de dados
  sql = `update usuario set senha='{nova_senha}' where id_usuario={id_usuario}`;
  let resultado = await update_mdb(sql);
 
  if (resultado.affectedRows > 0) {
    res.status(200).json({ resultado: 1 });
    return
  }
  else {
    const status = 404
    const message = 'Não foi possivel alterar a senha!';
    res.status(status).json({status, message})
    return
  }
})




app.listen(port, () => {
  console.log(`DTG server em http://localhost:${port}`)
})
