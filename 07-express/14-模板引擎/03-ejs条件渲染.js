// 变量
let isLogin = true;

// // 原生
// if(isLogin) {
//   console.log('<span> welcome </span>')
// } else {
//   console.log('<span> login in </span> <span> register </span>')
// }

const ejs = require('ejs')
const fs = require('fs')

let html = fs.readFileSync('./03-home.ejs').toString()

let result = ejs.render(html, { isLogin })

console.log(result)
