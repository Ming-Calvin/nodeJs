// 创建函数
const fn = function () {
  console.log('fn')
}

const cn = function () {
  console.log('cn')
}

// 1. 导出两个函数
// module.exports = {
//   fn, cn
// }

// 2. 使用exports导出
// exports.fn = fn
// exports.cn = cn

// 3. 注意
// a. module.exports 可以暴露任何数据
// module.exports = 'abc'

// 不能使用 exports = 'value' 的方式暴露数据
exports = 'abc'
// 结果是 {}
// 因为 module.exports === exports, 导出的模块是module.exports， 改变exports的值，
// 导出的还是原本地址的对象值
