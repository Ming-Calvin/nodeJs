// 1. 导入http模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
  // 设置响应状态码
  response.statusCode = 404
  // 设置响应状态描述
  response.statusMessage = 'haha'

  // 设置响应头
  response.setHeader('content-type', 'text/html;charset=utf-8')
  // 设置自定义响应头
  response.setHeader('myHeader', 'abc')
  // 设置多个名称相同的响应头
  response.setHeader('test', ['a', 'b', 'c'])

  // 设置响应体
  response.write('write1')
  response.write('write2')
  response.write('write3')

  response.end('')
})

// 监听服务
server.listen(9000, () => {
  console.log('success')
})
