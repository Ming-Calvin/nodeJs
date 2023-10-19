// 1. 导入express
const express = require('express')

// 2. 创建express应用
const app = express()

// 3. 创建路由
app.get('/home', (request, response) => {
  response.end('hello express')
})

// 4. 监听端口，启动服务
app.listen(3000, () => {
  console.log('success')
})
