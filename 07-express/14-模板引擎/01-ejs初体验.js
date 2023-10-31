// 1. 引入ejs 目的是让html 和 js 分离
const ejs = require('ejs')
// 引入fs
const fs = require('fs')

// 2. 字符串
let xm = '小明'
let xh = '小红'

// 3. 声明变量
let str = 'perfect <%= xm %>'

let html = fs.readFileSync('./01-html.html').toString()

// 4. 使用ejs渲染
let result = ejs.render(html, { xm , xh})

console.log(result)
