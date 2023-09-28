const fs = require('fs')

// 查看状态 -- stat -- status
fs.stat('./10. 查看资源信息.js', (err, data) => {
  if(err) {
    console.log(err)
    return
  }

  console.log(data)

  // 判断是不是文件
  console.log(data.isFile())

  // 判断是不是文件夹
  console.log(data.isDirectory())
})


