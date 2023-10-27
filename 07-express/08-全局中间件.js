const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// 声明中间件函数
function recordMiddleware(req, res, next) {
  // 获取url 和 ip
  let { url , ip } = req

  // 将信息保存在文件中 access.log
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`)
  // 调用next
  next();
}

// 使用中间件函数
app.use(recordMiddleware)

app.get('/home', (req, res) => {
  res.send('front-end')
})

app.get('/admin', (req, res) =>{
  res.send('back-end')
})

app.get('*', (req, res) => {
  res.send(`<h1>404 Not Found</h1>`)
})

app.listen(9000, ()=> {
  console.log('success')
})
