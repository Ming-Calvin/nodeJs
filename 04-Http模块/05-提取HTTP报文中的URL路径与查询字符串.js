// 导入http模块
const http = require('http')
// 1. 引入url模块
const url = require('url')

//创建服务  形参：request -- 请求信息 ；response -- 响应信息
const server = http.createServer((request, response) => {
  // 2. 解析 request.url  形参：request.url请求地址  是否将地址栏参数从字符串转换为独享
  let res = url.parse(request.url, true)
  console.log(res)
  // 路径
  let pathname = res.pathname

  // 查询字符串
  let keyword = res.query.keyword
  console.log(keyword)

  // 响应结束
  response.end('Hello Http Server') // 设置请求体，并结束请求
})

// 监听端口  形参：端口号 ； 成功启动后的回调函数
// 默认端口是80
server.listen(9000, () => {
  console.log('server open')
})
