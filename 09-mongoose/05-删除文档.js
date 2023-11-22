const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/bilibili")

mongoose.connection.once("open", () => {
  console.log("success")

  const BookSchema = {
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  }

  const BookModel = mongoose.model("novel", BookSchema)

  // 删除单条
  // BookModel.deleteOne({_id: "655e246065ffa960788ae313"}).then(data => {
  //   console.log(data)
  // }).catch(err => {
  //   console.log(err)
  // })

  // 批量删除
  BookModel.deleteMany({is_hot: false}).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
})

mongoose.connection.on("close", () => {
  console.log("close")
})

mongoose.connection.on("error", () => {
  console.log("error")
})