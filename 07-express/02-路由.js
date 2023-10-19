// 导入express
const express = require('express')

// 创建express应用
const app = express()

// 创建路由
app.get('/home', (request, response) => {
  response.end('hello express')
})

app.get('/', (req, res) => {
  res.end('home')
})

app.post('/login', (req, res) => {
  res.end('login')
})

// 所有
app.all('/test', (req, res) => {
  res.end('text')
})

// 除了上面之外的所有路由
app.all('*', (req, res) => {
  res.end('404 not found')
})


// 监听端口，启动服务
app.listen(3000, () => {
  console.log('success')
})
