# 02-Node的fs模块

## 1. 文件写入

### 1.1. 引入 `fs` 模块

在Node.js中，我们首先需要引入`fs`模块来进行文件操作。

```javascript
const fs = require('fs');
```

### 1.2. 异步写入文件

使用 `fs.writeFile` 方法可以异步地将数据写入文件。

#### 1.2.1. 代码示例：

```javascript
fs.writeFile('./01-文件写入.txt', '文本内容', err => {
  if(err) {
    console.log(err, 'err');
    return;
  }
  console.log('success');
});
```

在上述代码中：

- 第一个参数是要写入的文件名。
- 第二个参数是要写入的文本内容。
- 第三个参数是一个回调函数，该回调有一个参数 `err`。如果写入成功，`err` 为 `null`；否则，`err` 将包含错误信息。

### 1.3. 同步写入文件

使用 `fs.writeFileSync` 方法可以同步地将数据写入文件。

#### 1.3.1. 代码示例：

```javascript
fs.writeFileSync('./01-文件写入Sync.txt', '文本内容Sync');
```

在上述代码中，第一个参数是要写入的文件名，第二个参数是要写入的文本内容。



## 2. 追加写入

### 2.1. 引入 `fs` 模块

和文件写入一样，我们首先需要引入`fs`模块来进行文件的追加操作。

```javascript
const fs = require('fs');
```

### 2.2. 异步追加写入

使用 `fs.appendFile` 方法可以异步地将数据追加到文件。

#### 2.2.1. 代码示例：

```javascript
fs.appendFile('./01-文件写入.txt', ',追加内容', err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```

### 2.3. 同步追加写入

使用 `fs.appendFileSync` 方法可以同步地将数据追加到文件。

#### 2.3.1. 代码示例：

```javascript
fs.appendFileSync('./01-文件写入.txt', '\r\n,追加内容Sync');
```

### 2.4. 使用`writeFile` 进行追加写入

除了 `appendFile`，我们还可以使用 `fs.writeFile` 方法进行追加写入，但需要在配置中添加 `{ flag: 'a' }`。

#### 2.4.1. 代码示例：

```javascript
fs.writeFile('./01-文件写入.txt', '\r\nwriteFile追加', { flag: 'a' }, err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```



## 3. 流式写入

### 3.1. 导入 `fs` 模块

在Node.js中，进行流式写入前，我们首先需要引入`fs`模块。

```javascript
const fs = require('fs');
```

### 3.2. 创建写入流对象

使用 `fs.createWriteStream` 方法，我们可以创建一个用于流式写入的对象。

#### 3.2.1. 代码示例：

```javascript
const ws = fs.createWriteStream('03-流式写入.txt');
```

### 3.3. 写入数据

一旦创建了写入流对象，我们可以使用 `ws.write` 方法多次向文件中写入数据。

#### 3.3.1. 代码示例：

```javascript
ws.write('abcdefg\n');
ws.write('1234567\n');
ws.write('ojska\n');
```

### 3.4. 关闭写入流

完成写入后，我们需要使用 `ws.close` 方法来关闭写入流。

#### 3.4.1. 代码示例：

```javascript
ws.close();
```



## 4. 文件读取

### 4.1. 导入 `fs` 模块

在Node.js中，进行文件读取前，我们首先需要引入`fs`模块。

```javascript
const fs = require('fs');
```

### 4.2. 异步读取文件

使用 `fs.readFile` 方法，我们可以异步地读取文件内容。

#### 4.2.1. 代码示例：

```javascript
fs.readFile('./03-流式写入.txt', (err, data) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});
```

### 4.3. 同步读取文件

使用 `fs.readFileSync` 方法，我们可以同步地读取文件内容。

#### 4.3.1. 代码示例：

```javascript
let data = fs.readFileSync('./03-流式写入.txt');
console.log(data.toString());
```



## 5. 流式读取

### 5.1. 导入 `fs` 模块

在Node.js中，进行流式读取前，我们首先需要引入`fs`模块。

```javascript
const fs = require('fs');
```

### 5.2. 创建流式读取对象

使用 `fs.createReadStream` 方法，我们可以创建一个用于流式读取的对象。

#### 5.2.1. 代码示例：

```javascript
const rs = fs.createReadStream('./NewJeans - ETA - 320K.mp3');
```

### 5.3. 绑定 `data` 事件读取数据

一旦创建了读取流对象，我们可以使用 `rs.on('data', callback)` 方法绑定数据读取事件。理想情况下，每次读取的数据块大小为65536字节，即64kb。

#### 5.3.1. 代码示例：

```javascript
rs.on('data', chunk => {
  console.log(chunk.length);
});
```

### 5.4. 绑定 `end` 事件结束读取

使用 `rs.on('end', callback)` 方法，我们可以绑定读取结束事件。

#### 5.4.1. 代码示例：

```javascript
rs.on('end', () => {
  console.log('success');
});
```



## 6. 练习：文件复制

### 6.1. 引入模块

在Node.js中，我们首先需要引入`fs`模块进行文件操作，同时引入`process`模块来观察使用的内存。

```javascript
const fs = require('fs');
const process = require('process');
```

### 6.2. 使用 `readFileSync` 和 `writeFileSync` 进行文件复制

这是一种简单的文件复制方法，直接读取整个文件的内容，并写入到新的文件中。

#### 6.2.1. 代码示例：

```javascript
let data = fs.readFileSync('./Super Shy - NewJeans.flac');
fs.writeFileSync('./Super Shy 2', data);
console.log(process.memoryUsage());
```

### 6.3. 使用流式操作进行文件复制

流式操作是另一种文件复制方法，它通过读取和写入文件流来实现，并且占用的内存空间更少。

#### 6.3.1. 代码示例：

```javascript
const rs = fs.createReadStream('Super Shy - NewJeans.flac');
const ws = fs.createWriteStream('./Super Shy 3.mp3');
rs.on('data', chuck => {
  ws.write(chuck);
});
rs.on('end', () => {
  console.log(process.memoryUsage());
});
```



### 7. 文件重命名与移动

#### 7.1. 引入 `fs` 模块

```javascript
const fs = require('fs');
```

#### 7.2. 文件重命名

使用 `fs.rename` 方法可以重命名文件。

```javascript
fs.rename('./07-文件重命名与移动.txt', './07-重命名了.txt', err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```

#### 7.3. 文件移动

`fs.rename` 方法也可以用于文件的移动。如果指定了不同的路径，文件将被移动到新的位置。

```javascript
fs.rename('./07-重命名了.txt', '../07-移动了.txt', err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```




## 8. 文件删除操作

### 8.1. 引入 `fs` 模块

```javascript
const fs = require('fs');
```

### 8.2. 使用 `unlink` 方法删除文件

```javascript
fs.unlink('./unlink.txt', err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```

### 8.3. 使用 `rm` 方法删除文件

```javascript
fs.rm('./rm.txt', err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```



## 9. 创建与管理文件夹

### 9.1. 引入 `fs` 模块

```javascript
const fs = require('fs');
```

### 9.2. 使用 `mkdir` 方法创建文件夹

```javascript
fs.mkdir('./08-directory', err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```

### 9.3. 递归创建文件夹

```javascript
fs.mkdir('./08-a/b/c', { recursive: true }, err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```

### 9.4. 使用 `readdir` 方法读取文件夹

```javascript
fs.readdir('./', (err,data) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data);
});
```

### 9.5. 使用 `rmdir` 方法删除文件夹

```javascript
fs.rmdir('./08-directory', err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```

### 9.6. 使用 `rm` 方法递归删除文件夹

```javascript
fs.rm('./08-a', { recursive: true },  err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('success');
});
```



### 10. 查看资源信息

### 10.1. 引入 `fs` 模块

```javascript
const fs = require('fs');
```

### 10.2. 使用 `stat` 方法查看资源信息

`fs.stat` 方法可以查看指定资源的状态信息。

```javascript
fs.stat('./10. 查看资源信息.js', (err, data) => {
  if(err) {
    console.log(err);
    return;
  }

  console.log(data);
});
```

### 10.3. 判断资源类型

- **判断是不是文件**：使用 `data.isFile()` 方法。

```javascript
console.log(data.isFile());
```

- **判断是不是文件夹**：使用 `data.isDirectory()` 方法。

```javascript
console.log(data.isDirectory());
```



### 11. 文件路径的使用与注意事项

在Node.js中进行文件操作时，我们经常需要指定文件的路径。在这部分内容中，我们将深入探讨路径的使用方法和相关的注意事项。

#### 11.1. 引入 `fs` 模块

```javascript
const fs = require('fs');
```

#### 11.2. 两种主要的路径

- **相对路径**：相对于当前工作目录的路径。

  ```javascript
  fs.writeFileSync('./11-index.txt', 'love');
  fs.writeFileSync('11-index-2.txt', 'love');
  fs.writeFileSync('../11-index-3.txt', 'love');
  ```

- **绝对路径**：从根目录或盘符开始的完整路径。

  ```javascript
  fs.writeFileSync('D:/index.txt', 'love');
  // 盘符路径 -- 根目录下
  fs.writeFileSync('/index.txt', 'love');
  ```

#### 11.3. 相对路径的BUG与解决方案

使用相对路径时，其参考点是命令行的当前文件夹。

```javascript
fs.writeFileSync('./12-file.txt', '111');
```

为了避免这种情况，我们可以选择使用绝对路径。`__dirname`是一个全局变量，它保存了文件所在目录的绝对路径。

```javascript
console.log(__dirname);
fs.writeFileSync(__dirname + '/12-file.txt', 'love');
```



以下是对所有文件的总结博客内容：

---

### 12. 总结

在Node.js中，`fs`模块提供了一个与文件系统进行互动的API。通过这些文件，我们学到了以下的操作和知识点：

1. **文件写入**：

    - 使用`fs.writeFileSync`进行同步写入。

    - 使用`fs.writeFile`进行异步写入。

2. **追加写入**：
    - 使用`fs.appendFile`方法追加内容到文件。

3. **流式写入**：
    - 使用`fs.createWriteStream`创建一个可写的文件流。
    - 使用流的`write`方法写入数据。
    - 使用流的`end`方法结束写入。

4. **文件读取**：
    - 使用`fs.readFileSync`进行同步读取。
    - 使用`fs.readFile`进行异步读取。

5. **流式读取**：
    - 使用`fs.createReadStream`创建一个可读的文件流。
    - 通过监听流的`data`事件读取数据块。
    - 通过监听流的`end`事件知道文件读取完成。

6. **文件复制**：
    - 使用读取流与写入流结合，实现文件的复制。

7. **文件重命名与移动**：
    - 使用`fs.rename`方法进行文件的重命名和移动。

8. **文件删除**：
    - 使用`fs.unlink`和`fs.rm`方法删除文件。

9. **文件夹的创建、读取和删除**：
    - 使用`fs.mkdir`创建文件夹。
    - 使用`fs.readdir`读取文件夹内容。
    - 使用`fs.rmdir`和`fs.rm`删除文件夹。

10. **查看资源信息**：
    - 使用`fs.stat`查看文件或文件夹的状态信息。
    - 使用`data.isFile()`和`data.isDirectory()`判断资源类型。

11. **文件路径的使用与注意事项**：
     - 使用相对路径和绝对路径。
     - 注意相对路径的参考点是命令行的当前文件夹。
     - 使用`__dirname`获取文件所在的绝对路径。

这些知识点提供了在Node.js中进行文件和文件夹操作的基础。每个操作都与相应的方法或技术相关联，使得在Node.js中的文件操作变得简单且直观。
