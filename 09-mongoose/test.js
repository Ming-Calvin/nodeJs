const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/bilibili")

mongoose.connection.once('open', () => {
  console.log('success')

  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
  })

  let BookModel = mongoose.model('book', BookSchema)

  BookModel.create({
    name: "Happy Day",
    author: "XM",
    price: 123
  }).then(res => {
    console.log(res)

    mongoose.disconnect()
  }).catch(err => {
    console.log(err)
  })


})

mongoose.connection.on('error', () => {
  console.log('error')
})

mongoose.connection.on('close', () => {
  console.log('close')
})
