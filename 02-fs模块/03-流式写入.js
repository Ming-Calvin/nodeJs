// 1. 导入fs模块
const fs = require('fs')

// 2. 创建写入流对象
const ws = fs.createWriteStream('03-流式写入.txt')

// 3. write
ws.write('abcdefg\n')
ws.write('1234567\n')
ws.write('ojska\n')

// 4. 关闭写入流
ws.close()


