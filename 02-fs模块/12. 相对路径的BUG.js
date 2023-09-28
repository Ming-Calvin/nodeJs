const fs = require('fs')

// 相对路径的参照舞是命令行的当前文件夹
// fs.writeFileSync('./12-file.txt', '111')

// 选择使用绝对路径 '全局变量' 保存文件所在目录的绝对路径
console.log(__dirname)
fs.writeFileSync(__dirname + '/12-file.txt', 'love')
