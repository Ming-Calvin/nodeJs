const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/bilibili")

mongoose.connection.once("open", () => {
  console.log('success')

  const BookSchema = {
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  }

  const BookModel = mongoose.model('novel', BookSchema) // 创建后端数据库 novel 会为复数

  BookModel.insertMany([{ name: "Mystic Tales", author: "Alice Johnson", price: 150, is_hot: true },
    { name: "Journey Through Time", author: "John Smith", price: 175, is_hot: true },
    { name: "The Lost City", author: "Emma Brown", price: 200, is_hot: false },
    { name: "Space Odyssey", author: "Michael Davis", price: 190, is_hot: false },
    { name: "The Secret Garden", author: "Sophia Wilson", price: 160, is_hot: false },
    { name: "Adventures at Sea", author: "William Martinez", price: 180, is_hot: false },
    { name: "Mountain Echoes", author: "Olivia Garcia", price: 165, is_hot: true },
    { name: "Desert Mirage", author: "Lucas Rodriguez", price: 155, is_hot: false },
    { name: "Ancient Mysteries", author: "Ella Hernandez", price: 210, is_hot: true },
    { name: "Future Worlds", author: "Liam Jones", price: 195, is_hot: false }])
})

mongoose.connection.once("error", () => {
  console.log('error')
})

mongoose.connection.once("close", () => {
  console.log('close')
})

// setTimeout(() => {
//     mongoose.disconnect()
// },2000)