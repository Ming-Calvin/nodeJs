// 导入express
const express = require('express')

// 创建express应用
const app = express()

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))


// 创建路由
app.get('/home', (request, response) => {
  response.end('hello express')
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('success')
})
