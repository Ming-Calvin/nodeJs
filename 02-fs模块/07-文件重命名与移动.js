// 引入fs模块
const fs = require('fs')

// 重命名
// fs.rename('./07-文件重命名与移动.txt', './07-重命名了.txt', err => {
//   if(err) {
//     console.log(err)
//     return
//   }
//
//   console.log('success')
// })

// 文件移动
fs.rename('./07-重命名了.txt', '../07-移动了.txt', err => {
  if(err) {
    console.log(err)
    return
  }

  console.log('success')
})


