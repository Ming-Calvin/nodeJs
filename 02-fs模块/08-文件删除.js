const fs = require('fs')

// unlink 方法  unlinkSync
// fs.unlink('./unlink.txt', err => {
//   if(err) {
//     console.log(err)
//     return
//   }
//
//   console.log('success')
// })

// rm 方法  rmSync
fs.rm('./rm.txt', err => {
  if(err) {
    console.log(err)
    return
  }

  console.log('success')
})
