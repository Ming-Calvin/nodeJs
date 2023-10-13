// 1. 不带后缀名导入模块

// js文件
const me = require('./me')

// json文件
const a = require('./a')

// 如果同时存在文件名相同的js和json文件，默认导入的是js文件
const jsA = require('./a')

// 2. 如果是未知的文件类型，默认采用js的文件读取方式
const abc = require('./abc')
console.log(abc)
