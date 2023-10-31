// 导入express
const express = require('express')

// 创建express应用
const app = express()

// 声明中间件
app.use((req, res, next) => {
  // 检测请求头中的refer是否为127.0.0.1
  // 获取refer
  let referer = req.get('referer')

  if(referer) {
    // 实例化
    let url = new URL(referer)

    // 获取hostname
    let hostname = url.hostname

    if(hostname !== '127.0.0.1') {
      res.status(404).send(`<h1> 404 </h1>`)
    }
  }

  next();
})



// 静态资源处理中间件
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/', (request, response) => {
  response.send('111')
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('success')
})
