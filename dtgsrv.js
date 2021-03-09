// Aplicação sem expressJS
//const http = require('http')

//const hostname = '127.0.0.1'
//const port = 8793          //process.env.PORT

//const server = http.createServer((req, res) => {
//  res.statusCode = 200
//  res.setHeader('Content-Type', 'text/plain')
//  res.end('Alo mundo DTG!\n')
//})

//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`)
//})


var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
