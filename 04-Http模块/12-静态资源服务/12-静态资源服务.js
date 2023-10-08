const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  // 获取路径地址
  const { pathname } = new URL(request.url, 'http://127.0.0.1')

  // 设置资源路劲
  const filePath = __dirname + '/page' + pathname

  fs.readFile(filePath, (err, data) => {
    // 如果错误则设置状态为500
    if(err) {
      response.statusCode = 500
      response.end('404 Not Found')
      return
    }

    response.end(data)
  })

})

server.listen(9000, () => {
  console.log('success')
})
