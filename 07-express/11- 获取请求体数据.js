const express = require('express')
const bodyParser = require('body-parser')

const app = new express()

// 解析JSON格式请求中间件
const jsonParser = bodyParser.json()

// 解析 querystring格式请求的中间件
const urlencodeParser = bodyParser.urlencoded({ extended: false })

app.get('/login', (req, res) => {
  // 响应HTML文件内容
  res.sendFile(__dirname + "/11-form.html")
})

app.post('/login', urlencodeParser, (req, res) => {
  console.log(req.body)
  res.send('123')
})

app.listen(3000, () => {
  console.log('success')
})
