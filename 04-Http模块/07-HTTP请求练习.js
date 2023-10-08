// 1. 导入http模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
  // 获取请求的方法
  let { method } = request

  // 获取请求的地址
  let { pathname } = new URL(request.url, 'http://127.0.0.1')

  if( method === 'GET' && pathname ===  '/login') {
    response.end('login page')
  } else if ( method === 'GET' && pathname === '/reg') {
    response.end('register page')
  } else {
    response.end('Not Found')
  }
})

// 监听服务
server.listen(9000, () => {
  console.log('success')
})
