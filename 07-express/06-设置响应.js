const express = require('express')

const app = new express()

app.get('/response', (req, res) => {
  // 原生响应
  // res.statusCode = 404  // 响应状态码
  // res.statusMessage = 'abc' // 响应信息
  // res.setHeader('xxx', 'yyy') // 响应头
  // res.write('hello') // 响应体
  // res.end('response') // 响应体（结束）

  // response 响应
  // res.status(500) // 响应状态码
  // res.set('aaa', 'bbb') // 响应头
  // res.send('哈哈哈') // 响应体  // 使用send时i，请求头回自动加上 ’contentType: text/html;charset=utf-8'

  // 可以连在一起写
  res.status(500).set('aaa', 'bbb').send('哈杀杀杀')
})

app.listen(9000, () => {
  console.log('success')
})
