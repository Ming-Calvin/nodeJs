const fs = require('fs')

// 创建文件夹 mkdir mk--make dir--directory
// fs.mkdir('./08-directory', err => {
//   if(err) {
//     console.log(err)
//     return
//   }
//
//   console.log('success')
// })

// 递归创建 加上配置 { recursive: true }  recursive -- 递归
// fs.mkdir('./08-a/b/c', { recursive: true }, err => {
//   if(err) {
//     console.log(err)
//     return
//   }
//
//   console.log('success')
// })

// 文件夹读取
// fs.readdir('./', (err,data) => {
//   if(err) {
//     console.log(err)
//     return
//   }
//
//   console.log(data)
// })

// 删除文件夹
// fs.rmdir('./08-directory', err => {
//   if(err) {
//     console.log(err)
//     return
//   }
//
//   console.log('success')
// })

// 删除文件夹--递归 不加配置回到这删除失败，因为文件夹内有内容
fs.rm('./08-a', { recursive: true },  err => {
  if(err) {
    console.log(err)
    return
  }

  console.log('success')
})
