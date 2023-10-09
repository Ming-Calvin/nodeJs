const http = require('http')
const fs = require('fs')
const path = require('path')

// 设置mime类型表
const mime = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}

const server = http.createServer((request, response) => {
  // 判断请求方法
  if(request.method !== 'GET') {
    response.statusCode = 405
    response.end(`<h1> 405 Method Not Allowed</h1>`)
  }

  // 获取URL路径地址
  const { pathname } = new URL(request.url, 'http://127.0.0.1')

  // 设置资源路劲
  const filePath = __dirname + '/page' + pathname

  fs.readFile(filePath, (err, data) => {
    // 获取后缀名
    let ext = path.extname(filePath).slice(1)

    // 获取对应的类型
    let type = mime[ext]

    // 设置请求头的mime类型
    if(type) {

      if (ext === 'html') {
        // 解决乱码问题，在mime类型后加 charset=utf-8
        response.setHeader('content-type', type + ';charset=utf-8')
      } else {
        response.setHeader('content-type', type)
      }

    } else {
      response.setHeader('content-type', 'application/octet-stream')
    }

    // 如果错误则设置状态为500
    if(err) {
      // 判断错误编号
      switch(err.code) {
        case 'ENOENT':
          // 找不到文件
          response.statusCode = 404
          response.end(`<h1> 404 Not Found</h1>`)
        case 'EPERM':
          // 没有权限
          response.statusCode = 403
          response.end(`<h1> 403 Forbidden</h1>`)
        default:
          // 默认错误
          response.statusCode = 500
          response.end(`<h1> Inter Server Error </h1>`)
      }
      return
    }

    // 响应文件内容
    response.end(data)
  })

})

server.listen(9000, () => {
  console.log('success')
})
