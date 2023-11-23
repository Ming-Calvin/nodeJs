// 1. 安装mongoose
// 2. 导入mongoose
const mongoose = require('mongoose')

// 设置 strictQuery 为 true
mongoose.set('strictQuery', true)

// 3. 连接mongoose服务
//                协议名称 // ip + 端口 / 数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibli')
// 09-mongoose.connect('mongodb://127.0.0.1:27018/bilibli')

// 4. 设置回调
// once 一次 事件回调只执行一次
mongoose.connection.once('open', () => {
  console.log('success')
  // app.listen(8080)
})

mongoose.connection.on('error', () => {
  console.log('error')
})

mongoose.connection.on('close', () => {
  console.log('close')
})

setTimeout(() => {
  mongoose.disconnect()
} , 5000)
