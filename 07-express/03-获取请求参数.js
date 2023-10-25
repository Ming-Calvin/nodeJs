// 导入express
const express = require('express')

// 创建express应用
const app = express();

// 创建路由
app.get('/request', (req, res) => {
  // 原生操作
  // console.log(req.method, '请求方法')
  // console.log(req.url, '请求地址')
  // console.log(req.httpVersion, 'http版本')
  // console.log(req.headers, '请求头')

  // express操作
  console.log(req.path, '请求地址')
  console.log(req.query, '请求参数')

  console.log(req.ip, 'ip地址')
  console.log(req.get('host'), '获取请求头指定的参数')

  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('页面')
})

// 监听应用
app.listen(9000, () => {
  console.log('success')
})
