const express = require ('express')

const app = new express()

app.get('/home', (req, res) => {
  res.send('home')
})

// 中间件
let checkCodeMiddleware = (req, res, next) => {

  if(req.query.id === '521') {
    next();
  } else {
    res.send('error')
  }
}

// 将中间件放在要执行的方法中间，方法执行时，会先执行中间件
app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('admin')
})

app.get('/setting', checkCodeMiddleware,(req, res) => {
  res.send('setting')
})

app.get('*', (req, res) => {
  res.send('404 not found')
})

app.listen(9000, () => {
  console.log('success')
})
