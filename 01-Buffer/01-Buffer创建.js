// 1. alloc
// let buf = Buffer.alloc(10)
// console.log(buf)

// 2. allocUnsafe
// let buf_2 = Buffer.allocUnsafe(10)
// console.log(buf_2)

// alloc 与 allocUnsafe 的不同点
// a. alloc 在创建Buffer时，会清空内存中的数据；allocUnsafe不会
// b. 所以 allocUnsafe 创建的Buffer可能存在旧数据，但是创建速度比使用 alloc 快

// 3. from  -- 将字符串和数组转换成Buffer
let buf_3 = Buffer.from('hello')
console.log(buf_3)  // 打印结果是16进制的码

let buf_4 = Buffer.from([105, 108, 111, 101, 121, 111, 117])  // 数组里的元素代表ASCII码
console.log(buf_4)
