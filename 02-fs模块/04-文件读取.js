// 1. 引入fs
const fs = require('fs')

// 2. 读取文件 fs.readFile('文件名', 配置（可选）, (err, data) => {})
fs.readFile('./03-流式写入.txt', (err, data) => {
  if(err) {
    console.log(err)
    return
  }

  console.log(data.toString())
})

// 3. 同步读取
let data = fs.readFileSync('./03-流式写入.txt')
console.log(data.toString())
