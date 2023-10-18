// 仿造require自定义模块

/*
* 伪代码
* */

const path = require('path')
const fs = require('fs')

function require(file) {
  // 1. 将相对路径转换为绝对路径，定位目标文件
  let absolutePath = path.resolve(__dirname, file)

  // 2. 缓存检测
  if(caches[absolutePath]) {
    return caches[absolutePath]
  }

  // 3. 读取文件的代码
  let code = fs.readFileSync(absolutePath).toString()

  // 4. 包裹成一个函数，然后执行
  let module = {}
  let exports = module.exports = {}

  (function (exports, require, module, __filename, __dirname) {
    const test = {
      name: 'xm'
    }

    module.exports = test

    console.log(arguments.callee.toString())
  })(exports, require, module, __filename, __dirname)

  // 5. 缓存结果
  caches[absolutePath] = module.exports;

  // 6. 返回 module.exports 的值
  return module.exports;
}

const m = require('./me.js')
