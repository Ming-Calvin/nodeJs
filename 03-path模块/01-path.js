// 引入fs、path模块
const fs = require('fs')
const path = require('path')

// resolve方法 -- 拼接正确的绝对地址 参数: (绝对路径, 相对路径...)
console.log(path.resolve(__dirname + 'index.html'))
