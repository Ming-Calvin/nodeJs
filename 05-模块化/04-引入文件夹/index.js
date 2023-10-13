// 1. 导入的文件是文件夹时，默认查找文件夹下package.json下的main属性
const folder = require('./folder')

// 2. 如果不存在文件，则默认调用 index.js 或 index.json
const folders = require('./folder2')
console.log(folders)
