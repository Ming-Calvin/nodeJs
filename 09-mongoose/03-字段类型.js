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
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    exId: mongoose.Schema.Types.ObjectId,
    mix: mongoose.Schema.Types.Mixed
  })

  // 6. 创建模型对象， 对文档操作的封装对象
  let BookModel = mongoose.model('books', BookSchema)

  // 7. 新增
  BookModel.create({
    name: "Happy Day",
    author: "XM",
    price: 123,
    is_hot: true,
    tags: ['a', 'b', 'c'],
    pub_time: new Date(),
    mix: "123",
    exId: new ObjectId('655d75e36b2eb8eb19b706f9\'')
  }).then(data => {

    // 7. 如果没有出错
    console.log(data)
    // 8. 关闭数据库连接
    mongoose.disconnect()

  }).catch(err => {
    console.log(err)
  })
})

mongoose.connection.once('error', () => {
  console.log('error')
})

mongoose.connection.once('close', () => {
  console.log('close')
})
