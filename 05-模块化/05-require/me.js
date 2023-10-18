const obj = {
  a: 123,
  b: ['a', 'b', 'c']
}

module.exports = obj

// 输出
console.log(arguments.callee.toString())
