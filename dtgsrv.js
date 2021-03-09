const http = require('http')

const hostname = '127.0.0.1'
const port = 8793          //process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Alo mundo DTG!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
