const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  let html = fs.readFileSync(__dirname + '/10-优化.html')

  response.end(html)
})

server.listen(9000, () => {
  console.log('success')
})
