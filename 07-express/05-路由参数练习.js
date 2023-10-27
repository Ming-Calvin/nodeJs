// express 模块
const express = require('express')
// 导入json
const singerArray = require('./singers.json')

// 创建对象
const app = new express()

// 设置路由
app.get('/singer/:id.html', (req, res) => {

  // 获取路由参数
  let { id } = req.params
  let { singers } = singerArray

  // 在数组中查找是否有符合的json数据
  let result = singers.find(item => {
    if(item.id === Number(id)) {
      return true
    }
  })

  if(!result) {
    res.statusCode = 404
    res.end(`<h1>404 Not Found</h1>`)
  }

  res.end(`${ singers[id - 1].name }`)
})

// 监听端口
app.listen(9000, () => {
  console.log('success')
})
