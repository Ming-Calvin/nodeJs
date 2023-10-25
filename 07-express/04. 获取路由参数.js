// 引入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
// :id -- 占位符
app.get('/:id.html', (req, res) => {
  // 获取路由参数
  console.log(req.params)
  // 获取参数中的id
  console.log(req.params.id)


  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('node 测试')
})

// 监听
app.listen(9000, () => {
  console.log('success')
})
