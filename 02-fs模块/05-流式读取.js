// 1. 引入fs模块
const fs = require('fs')

// 2. 创建流式读取对象
const rs = fs.createReadStream('./NewJeans - ETA - 320K.mp3')

// 绑定data事件读取数据
rs.on('data', chunk => {
  console.log(chunk.length) // 每次读取65536字节 -- 64kb
})

// 绑定end事件结束读取
rs.on('end', () => {
  console.log('success')
})
