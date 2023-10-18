# 03-path模块

在Node.js的开发过程中，路径的处理是不可或缺的一环。为了方便对文件和目录路径的操作，Node.js提供了一个核心模块——`path`模块。通过`path`模块，可以很方便地处理和转换文件路径。

## 1. 引入Path模块

在使用`path`模块之前，首先需要通过`require`方法将其引入到项目中。同时，我们也将引入`fs`模块以进行后续的文件操作。

```javascript
const fs = require('fs')
const path = require('path')
```

## 2. resolve方法

`path.resolve`方法用于将路径或路径片段解析为绝对路径。具体来说，它会处理输入参数从右到左，直至构建出绝对路径。该方法的语法为 `path.resolve([...paths])`，其中`paths`是路径或路径片段的列表。

```javascript
console.log(path.resolve(__dirname, 'index.html'))
```
上述代码将输出当前文件所在目录与'index.html'拼接成的绝对路径。

## 3. sep属性

`path.sep`属性用于获取当前系统中文件路径的分隔符。在Windows系统中，它返回`\`，而在Linux系统中，它返回`/`。

```javascript
console.log(path.sep)  // windows -- \     linux -- /
```

## 4. parse方法

`path.parse`方法用于将一个路径字符串转换为一个路径对象，包括`root`, `dir`, `base`, `ext`, 和 `name`五个属性。

```javascript
console.log(path.parse(__filename))
```
该代码会输出当前文件路径的解析结果，包括文件所在的根目录、目录、文件名、扩展名和文件名（不包括扩展名）。



**结果：**

```js
{
  root: 'D:\\',
  dir: 'D:\\CodeFile\\2023\\2023.09\\nodeJs\\03-path模块',
  base: '01-path.js',
  ext: '.js',
  name: '01-path'
}
```



## 5. basename方法

`path.basename`方法用于获取路径中的文件名，包括扩展名。

```javascript
console.log(path.basename(__filename))  // 01-path.js
```

## 6. dirname方法

`path.dirname`方法用于获取路径中的目录名。

```javascript
console.log(path.dirname(__filename)) // D:\CodeFile\2023\2023.09\nodeJs\03-path模块
```

## 7. extname方法

`path.extname`方法用于获取路径中的文件扩展名。

```javascript
console.log(path.extname(__filename)) // .js
```

以上就是Node.js中`path`模块的基本用法。通过这些方法，我们可以更加方便和高效地处理文件路径，从而简化文件操作的相关代码。
