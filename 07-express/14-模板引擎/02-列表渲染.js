let fruit = ['apple', 'banana', 'cherry', 'Orange', 'Mango']

// 原生js
// let str = '<ul>'
//
// fruit.forEach(item => {
//   str += `<li> item </li>`
// })
//
// str += '</ul>'
//
// console.log(str, 'str')

const ejs = require('ejs')
const fs = require('fs')

let html = fs.readFileSync('./02-fruit.html').toString()

let result = ejs.render(html, { fruit })

console.log(result, 'result')
