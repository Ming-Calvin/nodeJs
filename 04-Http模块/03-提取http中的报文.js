// 1. 导入http模块
const http = require('http')

// 2. 创建服务  形参：request -- 请求信息 ；response -- 响应信息
const server = http.createServer((request, response) => {
  // 获取请求的方法
  // console.log(request.method)
  // 获取请求的url
  // console.log(request.url)   // url中的路劲及查询参数
  // 获取HTTP协议的版本号
  // console.log(request.httpVersion)
  // 获取HTTP请求头
  // console.log(request.headers)
  // console.log(request.headers.host)

  response.end('Hello Http Server') // 设置请求体，并结束请求
})

// 3. 监听端口  形参：端口号 ； 成功启动后的回调函数
// 默认端口是80
server.listen(9000, () => {
  console.log('server open')
})
