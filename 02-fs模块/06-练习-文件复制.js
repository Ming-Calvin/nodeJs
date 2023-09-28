// 1. 引入fs文件
const fs = require('fs')
// 引入 process 用于观察使用多少内存
const process = require('process')

/*// 方式一 readFileSync 和 writeFileSync
// 2. 读取目标文件
let data = fs.readFileSync('./Super Shy - NewJeans.flac')

// 3. 将文件内容写入新的文件中
fs.writeFileSync('./Super Shy 2', data)

console.log(process.memoryUsage())  // rss 52084736 49MB*/

/*// 方式二 流式操作 占据内存空间更少，理想状态下64kb
// 流式读取文件流
const rs = fs.createReadStream('Super Shy - NewJeans.flac')

// 流式写入文件流
const ws = fs.createWriteStream('./Super Shy 3.mp3')

// 绑定data事件(读取)
rs.on('data', chuck => {
  ws.write(chuck)
})

// 读取结束
rs.on('end', () => {
  console.log(process.memoryUsage())  // 31416320  29MB
})*/
