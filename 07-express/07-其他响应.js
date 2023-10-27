const express = require('express')

const app = new express()

app.get('/other', (req, res) => {
  // 跳转响应
  // res.redirect('https://www.baidu.com')

  // 下载响应
  // res.download(__dirname + '/package.json')

  // JSON响应
  // res.json({
  //   name: 'xm',
  //   age: 123
  // })

  res.sendFile(__dirname + '/test.html')

})

app.listen(9000, () => {
  console.log('success')
})
