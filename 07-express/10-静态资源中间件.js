// 导入express
const express = require('express')

// 创建express应用
const app = express()

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))  // 默认调用文件夹中的index文件

// 当请求符合两个路由时，按照先后的执行顺序，返回先执行的，此时会返回 静态资源中间件
// 创建路由
app.get('/', (request, response) => {
  response.end('hello express')
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('success')
})
