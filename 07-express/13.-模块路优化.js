const express = require('express')
// 导入路由
const homeRouter = require('./router/homeRouter')
const adminRouter = require('./router/adminRouter')

const app = new express()

// 设置鲁豫哦
app.use(homeRouter)
app.use(adminRouter)

app.get('/*', (req, res) => {
  res.send(`<h1> 404 Not Found </h1>`)
})

app.listen(3000, () => {
  console.log('success')
})
