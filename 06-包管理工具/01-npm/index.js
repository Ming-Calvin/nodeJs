// 1. 导入 uniq 包 用这种，找不到会从外层找
const uniq = require('uniq')
// 第二种
// const uniq = require('./node_modules/uniq')
// 第三种  看uniq的package中的 main
// const uniq = require('./node_modules/uniq/uniq.js')



// 2. 使用函数
let arr = [ 1, 2, 3, 4, 5, 6 ]

const result = uniq(arr)

console.log(result)
