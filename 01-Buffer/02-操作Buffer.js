// Buffer 与 字符串 的转换  使用toString将Buffer转换成 字符串
let buf = Buffer.from([105, 108, 111, 101, 121, 111, 117])
console.log(buf.toString()) // iloeyou

// [] 获取字符串中某个ASCII值
let buf_1 = Buffer.from('hello')
console.log(buf_1[0]) // 104
// 将其转换成二进制 这里的toString方法作用是转换成二进制
console.log(buf_1[0].toString(2)) // 1101000
// 修改Buffer的值
buf_1[0] = 95
console.log(buf_1.toString()) // _ello

// 溢出
buf_1[0] = 361  // 一个字节只能存储8位，高位将会被舍弃 0001 0110 1001 => 0110 1001
console.log(buf_1)

// 中文 -- 一个字符占3个字节
let buf_2 = Buffer.from('中文')
console.log(buf_2)  // 6个字节



