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
  res.send('Alo mundo!!!<br/> <b>Servidor DTG</b> ');
});

app.listen(port, () => {
  console.log(`DTG server em http://localhost:${port}`)
})
