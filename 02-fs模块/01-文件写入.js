// 1. 引入fs模块
const fs = require('fs')

// 2. 写入文件  fs.writeFile('文件名‘, ’文本内容‘, 配置（可选）, 回调函数)
fs.writeFile('./01-文件写入.txt', '文本内容', err => {
  // 错误时返回错误对象
  // 成功时返回null

  if(err) {
    console.log(err, 'err')
    return
  }

  console.log('success')
})

// 同步写入
fs.writeFileSync('./01-文件写入Sync.txt', '文本内容Sync')

