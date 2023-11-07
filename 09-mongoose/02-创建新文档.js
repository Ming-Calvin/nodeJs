// 1.安装mongoose
// 2.导入mongoose
const mongoose = require('mongoose')

// 3.连接mongoose
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 4.时间监听
mongoose.connection.once('open', () => {
  console.log('success')

  // 5. 创建文档的结构对象
  // 设置集合中文档的属性及属性的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
  })

  // 6. 创建模型对象， 对文档操作的封装对象
  let BookModel = mongoose.model('books', BookSchema)

  // 7. 新增
  BookModel.create({
    name: 'xm',
    author: 'aa',
    price: 123,
  }, (err, data) => {
    if(err) {
      console.log(err)
      return
    }

    // 7. 如果没有出错
    console.log(data)
    // 8. 关闭数据库连接
    mongoose.disconnect()
  })
})

mongoose.connection.once('error', () => {
  console.log('error')
})

mongoose.connection.once('close', () => {
  console.log('close')
})