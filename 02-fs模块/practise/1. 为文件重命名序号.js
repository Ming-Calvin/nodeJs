const fs = require('fs')

// 读取文件夹内的文件
let data = fs.readdirSync('./code')

// 遍历文件夹内的文件名
data.forEach(item => {
  // 使用分隔符提取序号和文件名
  // 使用结构复制分别获取序号和名字
  let [index, name] = item.split('-')

  // 判断序号是否小于10，小于10的需要添加0
  // 使用强制转换将字符串转为数字
  if(Number(index) < 10) {
    index = '0' + index
  }

  // 组成新名字
  let newName = index + '-' + name

  // 为原本的文件重命名
  fs.renameSync(`./code/${item}`, `./code/${newName}`)
})
