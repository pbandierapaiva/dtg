// Protótipo

var express = require('express');
var app = express();
const port = 8793

// Para colocar em execução no servidor
var sleep = require('sleep');
const pm2 = require('pm2')

const simpleGit = require('simple-git');
const git = simpleGit();   
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
// Alo mundo
app.get('/', function(req, res) {
  res.send('Alo mundo!!!<br/> <b>Servidor DTG </b> alterado Capa2');
});

//login
app.post('/auth/login', (req, res) => {
	//receber login e senha
	console.log("login endpoint called; request body:");	
	console.log(req.body);	
	const { login, senha } = req.body;	
	console.log("Login:" + login);
	console.log("senha:" + senha);
	//critografar em md5
	//fazer select no banco de dados
	//criar o token de acesso
	//retornar o usuario e o token
	/*
  if (isAuthenticated({email, senha}) === false) {
    const status = 401
    const message = 'E-mail ou senha incorretos!'
    res.status(status).json({status, message})
    return
  }
  const access_token = createToken({email, senha})
  let user = { ...userdb.usuarios.find(user => user.email === email && user.senha === senha) }
  delete user.senha
  console.log("Access Token:" + access_token);
  console.log("User:" + user);
  res.status(200).json({access_token, user})
  */
})


app.listen(port, () => {
  console.log(`DTG server em http://localhost:${port}`)
})
