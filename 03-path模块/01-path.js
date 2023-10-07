// 引入fs、path模块
const fs = require('fs')
const path = require('path')

// resolve方法 -- 拼接正确的绝对地址 参数: (绝对路径, 相对路径...)
console.log(path.resolve(__dirname + 'index.html'))

// sep分隔符  查看不同系统下的路径分隔符号
console.log(path.sep)   // windows -- \     linux -- /

// parse方法 解析路径返回对象
console.log(__filename) // 文件的地址  D:\CodeFile\2023\2023.09\nodeJs\03-path模块\01-path.js
console.log(path.parse(__filename))

// basename 获取文件名
console.log(path.basename(__filename))  // 01-path.js

// dirname 获取文件夹名
console.log(path.dirname(__filename)) // D:\CodeFile\2023\2023.09\nodeJs\03-path模块

// extname 获取文件拓展名
console.log(path.extname(__filename)) // .js


