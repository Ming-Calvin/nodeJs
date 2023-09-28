// 1. 引入fs
const fs = require('fs')

// 2. 追写文件 fs.appendFile(‘文件名’,‘文件内容’,配置（可选）, 回调函数)
fs.appendFile('./01-文件写入.txt', ',追加内容', err => {
  if(err) {
    console.log(err)
    return
  }

  console.log('success')
})

// 同步追写
fs.appendFileSync('./01-文件写入.txt', '\r\n,追加内容Sync')

// 使用writeFile进行追加写入 配置添加一个{ flag: 'a' }
fs.writeFile('./01-文件写入.txt', '\r\nwriteFile追加', { flag: 'a'}, err => {
  if(err) {
    console.log(err)
    return
  }

  console.log('success')
})
