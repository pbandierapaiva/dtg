// Protótipo

var express = require('express');
var app = express();
const port = 8793

// Para colocar em execução no servidor
const simpleGit = require('simple-git');
const git = simpleGit();   
app.get('/deploy', function(req, res) {
	git.pull()
	res.send('dir atualizado');
});

// Alo mundo
app.get('/', function(req, res) {
  res.send('Alo mundo DTG!!!');
});

app.listen(port, () => {
  console.log(`DTG server em http://localhost:${port}`)
})
