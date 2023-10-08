const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  // 1. 获取路径
  const { pathname } = new URL(request.url, 'http://127.0.0.1')

  if( pathname === '/' ) {
    let html = fs.readFileSync(__dirname + '/index.html')
    response.end(html)
  } else if( pathname === '/index.css' ) {
    let css = fs.readFileSync(__dirname + '/index.css')
    response.end(css)
  } else if ( pathname === '/index.js' ) {
    let js = fs.readFileSync(__dirname + '/index.js')
    response.end(js)
  } else {
    response.end(`<h1>404 Not Found</h1>`)
  }
})

server.listen(9000, () => {
  console.log('success')
})
