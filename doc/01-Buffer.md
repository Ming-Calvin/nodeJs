# 01-Buffer

### 1. Buffer的创建方法

在Node.js中，`Buffer`是用于处理二进制数据流的模块。它提供了多种方法来创建和处理缓冲区。本文将介绍如何使用不同的方法来创建`Buffer`。

#### 1.1 使用 `alloc` 创建缓冲区

```javascript
let buf = Buffer.alloc(10);
console.log(buf);
```

使用`alloc`方法可以创建一个指定大小的缓冲区，并将其初始化为0。

#### 1.2 使用 `allocUnsafe` 创建缓冲区

```javascript
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);
```

此方法可以创建一个缓冲区，但不会将其初始化。这意味着创建的缓冲区可能包含旧的数据，但创建速度会比`alloc`快。

#### 1.3 从字符串和数组创建缓冲区

```javascript
let buf_3 = Buffer.from('hello');
console.log(buf_3);  // 打印结果是16进制的码

let buf_4 = Buffer.from([105, 108, 111, 101, 121, 111, 117]);  // 数组里的元素代表ASCII码
console.log(buf_4);
```

使用`from`方法可以从字符串或数组创建缓冲区。

这些方法提供了在Node.js中创建缓冲区的基础。使用适当的方法可以确保的应用程序在处理二进制数据时具有最佳性能和安全性。




### 2. Buffer的操作方法

在Node.js中，`Buffer`提供了一系列方法来操作二进制数据。本文将介绍如何进行常见的`Buffer`操作。

#### 2.1 Buffer与字符串的转换

使用`toString`方法，我们可以轻松地将`Buffer`转换为字符串。

```javascript
let buf = Buffer.from([105, 108, 111, 101, 121, 111, 117]);
console.log(buf.toString());  // 输出：iloeyou
```

#### 2.2 使用数组索引获取ASCII值

我们可以使用数组索引来访问`Buffer`中的特定字节，从而获得相应的ASCII值。

```javascript
let buf_1 = Buffer.from('hello');
console.log(buf_1[0]);  // 输出：104
```

并且，我们可以将其转换为二进制：

```javascript
console.log(buf_1[0].toString(2));  // 输出：1101000
```

#### 2.3 修改Buffer的值

可以直接通过数组索引修改`Buffer`中的值。

```javascript
buf_1[0] = 95;
console.log(buf_1.toString());  // 输出：_ello
```

#### 2.4 Buffer的溢出

当我们尝试在`Buffer`中存储超出其容量的值时，高位会被舍弃。

```javascript
buf_1[0] = 361;
console.log(buf_1);
```

#### 2.5 中文字符在Buffer中的存储

中文字符在`Buffer`中通常占3个字节。

```javascript
let buf_2 = Buffer.from('中文');
console.log(buf_2);  // 输出：6个字节
```

这些方法可以有效地在Node.js中操作二进制数据，满足各种应用场景的需求。
