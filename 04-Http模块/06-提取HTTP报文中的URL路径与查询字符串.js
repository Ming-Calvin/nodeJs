// 导入http模块
const http = require('http')

//创建服务  形参：request -- 请求信息 ；response -- 响应信息
const server = http.createServer((request, response) => {


  // 响应结束
  response.end('Hello Http Server') // 设置请求体，并结束请求
})

// 监听端口  形参：端口号 ； 成功启动后的回调函数
// 默认端口是80
server.listen(9000, () => {
  console.log('server open')
})
