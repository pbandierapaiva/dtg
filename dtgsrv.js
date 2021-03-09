// Protótipo

var express = require('express');
var app = express();
const port = 8793

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Alo mundo DTG');
});


app.listen(port, () => {
  console.log(`DTG server em http://localhost:${port}`)
})
