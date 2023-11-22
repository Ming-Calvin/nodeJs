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
    id: {
      type: Number,
      unique: true  // 唯一值，需要重建集合才有用
    },
    name: {
      type: "String",
      required: true  // 必填项，标明其不能为空
    },
    author: {
      type: "String",
      default: "la" // 默认值
    },
    style: {
      type: "String",
      enum: ['a', 'b']  // 枚举
    },
    price: Number
  })

  // 6. 创建模型对象， 对文档操作的封装对象
  let BookModel = mongoose.model('books', BookSchema)

  // 7. 新增
  BookModel.create({
    id: 1 ,
    name: 'xm',
    author: 'aa',
    style: "a",
    price: 123,
  }).then(data => {
    // 7. 如果没有出错
    console.log(data)
    // 8. 关闭数据库连接
    mongoose.disconnect()
  }).catch(err => {
    console.log(err)

    mongoose.disconnect()
  })
})

mongoose.connection.once('error', () => {
  console.log('error')
})

mongoose.connection.once('close', () => {
  console.log('close')
})