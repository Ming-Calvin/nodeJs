// 导入express
const express = require('express')
const path = require('path')

// 创建express应用
const app = express()

// 1. 设置引擎模板
app.set('view engine', 'ejs')
// 2. 设置模板文件存放位置  模板文件：具有模板语法内容的文件
app.set('views', path.resolve(__dirname + '/views'))
// console.log(path.resolve(__dirname + '/views'), '123')
// app.set('views', path.join(__dirname, 'views'));



// 创建路由
app.get('/home', (req, res) => {
    // 3. render 响应
    // res.render('模板的文件名', '数据')
    let title = 'abc'
    res.render('home', { title })
    // 4. 创建模板文件  文件的后缀名是ejs
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('success')
})
