# 04-HTTP模块

## 1. HTTP 协议概述

### 1.1 HTTP 协议的概念

HTTP（HyperText Transfer Protocol）是一种用于分布式、协作式和超媒体信息系统的应用层协议。它是全球信息快速可靠传输的基础，并且是一个基于“请求与响应”模式的、无状态的应用层协议。

### 1.2 组成：客户端和服务端的交互

HTTP通信通常由客户端发起请求到服务端，并等待服务端的响应。整个过程通过请求报文和响应报文进行数据交流。

- **客户端**：发送**请求报文**到服务器。请求报文包含请求的方法、URL、协议版本、请求头部和请求体。
  
- **服务端**：接收并处理请求，然后返回**响应报文**。响应报文包括协议的版本、状态码、响应头部和响应体。

请注意，这个版本的内容更加精简，主要集中在HTTP协议的基本概念和客户端与服务端的基本交互上。如果你有其他特定的点需要探讨或强调，请随时告诉我！



## 2. 请求报文的组成

### 2.1 请求行

请求行是HTTP请求报文的第一行，主要包括以下几个部分：

- **请求方法**：例如 `GET`，表示请求类型。
  
- **请求URL**：用于定位资源，结构通常如下：
  
  ```
  http://www.example.com:80/index.html?a=100&b=200#logo
  ```
  其中：
  - `http`：协议名，定义了用于通信的协议（其他例如：https、ftp、ssh等）。
  - `www.example.com`：域名，指定了请求将发送到的服务器的位置。
  - `80`：端口号，用于通过网络访问服务器上的应用程序。
  - `/index.html`：路径，指定了服务器上的资源位置。
  - `a=100&b=200`：查询字符串，以键值对的形式发送给服务器的额外信息。
  - `#logo`：哈希（也叫锚点链接），用于定位页面上的特定部分（不发送给服务器）。

- **HTTP协议版本**：例如 `HTTP/1.1`，指定了客户端与服务器间通信的HTTP协议版本。

请求行示例：
```
GET /index.html HTTP/1.1
```

### 2.2 请求头

请求头部携带关于请求或要请求的实体的附加信息，以键值对的形式表示。以下是一些常见的请求头及其用途：

- **Host**: 指定请求的服务器的域名。

  ```http
  Host: www.example.com
  ```

- **Connection**: 指定是否保持网络连接。常见的值有 `keep-alive`（保持连接）和 `close`（关闭连接）。

  ```http
  Connection: keep-alive
  ```

- **Cache-Control**: 指定请求和响应遵循的缓存机制。例如，`max-age=0` 表示响应不应被缓存。

  ```http
  Cache-Control: max-age=0
  ```

- **Upgrade-Insecure-Requests**: 表示客户端愿意接受一个更安全的页面。例如，将HTTP站点升级到HTTPS。

  ```http
  Upgrade-Insecure-Requests: 1
  ```

- **User-Agent**: 提供关于客户端的信息，例如其操作系统和浏览器类型等。

  ```http
  User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3
  ```

- **Accept**: 指定客户端能够接收的内容类型。

  ```http
  Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
  ```

- **Accept-Encoding**: 指定客户端支持的内容编码类型。

  ```http
  Accept-Encoding: gzip, deflate, br
  ```

- **Accept-Language**: 指定客户端的语言首选项。

  ```http
  Accept-Language: en-US,en;q=0.5
  ```

- **Cookie**: 存储在客户端的变量—通常用于识别用户。

  ```http
  Cookie: name=value
  ```

这些请求头在HTTP请求中定义了客户端和服务器之间如何互相通信，是HTTP通信过程中非常关键的部分。

### 2.3 空行

请求头和请求体之间有一个空行，标记着请求头的结束。

### 2.4 请求体

请求体包含要发送给服务器的数据。不是所有的请求都有请求体（例如，GET请求通常就没有请求体）。当请求体存在时，它可以包含例如表单提交的数据或文件上传等信息。



## 3. 响应报文的组成

### 3.1 响应行

响应行是响应报文的起始行，包括以下几个部分：

- **HTTP协议版本**：例如 `HTTP/1.1`。
  
- **响应状态码**：一个三位数字表示请求成功或失败的状态。例如：
  - **2XX 成功**：
    - `200 OK`：请求成功。
    - `201 Created`：请求已被实现，新的资源已创建。
    - `204 No Content`：请求成功，但没有需要返回的实体内容。
  - **3XX 重定向**：
    - `301 Moved Permanently`：请求的资源已被永久移动到新的位置。
    - `302 Found`：请求的资源暂时从不同的URI响应请求。
    - `304 Not Modified`：资源自从上次请求后没有发生变化。
  - **4XX 客户端错误**：
    - `400 Bad Request`：请求格式有误。
    - `401 Unauthorized`：请求未认证。
    - `403 Forbidden`：服务器理解请求，但拒绝执行。
    - `404 Not Found`：请求的资源在服务器上未找到。
  - **5XX 服务器错误**：
    - `500 Internal Server Error`：服务器遇到了一个未知的错误。
    - `502 Bad Gateway`：服务器作为网关或代理时，从上游服务器接收到的响应是无效的。
    - `503 Service Unavailable`：服务器目前无法使用（由于过载或停机维护）。
  
- **响应状态描述**：简单描述状态码的文本。例如 `OK`、`Not Found` 或 `Internal Server Error`。

一个完整的响应行例如：
```http
HTTP/1.1 200 OK
```

### 3.2 响应头

响应头部包含响应的附加信息和元数据。以下是一些常见的响应头：

- **Cache-Control**：缓存控制，例如 `private` 通常表示资源是私有的，只允许客户端缓存数据。
  ```http
  Cache-Control: private
  ```
  
- **Connection**：连接设置，例如 `keep-alive` 表示保持连接。
  ```http
  Connection: keep-alive
  ```
  
- **Content-Type**：设置响应体的数据类型及字符集。例如，`text/html;charset=utf-8` 表示响应体的内容类型是HTML，字符集是UTF-8。
  ```http
  Content-Type: text/html;charset=utf-8
  ```
  
- **Content-Length**：响应体的长度，单位通常是字节。
  ```http
  Content-Length: 12345
  ```

### 3.3 空行

一个空行，表示响应头的结束，响应体的开始。

### 3.4 响应体

响应体包含服务器返回的数据。数据的类型可以是HTML、CSS、JS、图片、JSON等，由`Content-Type`头部字段定义。响应体的内容可以是资源的实际数据，或者是由服务器动态生成的数据。



## 4. 创建 HTTP 服务

### 4.1 导入HTTP模块

```javascript
const http = require('http');
```
使用`require`函数导入Node.js的`http`模块，使我们可以使用其创建服务器的功能。

### 4.2 创建HTTP服务

```javascript
const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.end('中文');
});
```
- 利用`http.createServer`方法创建一个新的HTTP服务器。
- 传递给`createServer`的回调函数用于处理HTTP请求和响应，通过`response.setHeader`和`response.end`方法分别设置响应头信息和响应体内容。

### 4.3 设置响应头

```javascript
response.setHeader('content-type', 'text/html;charset=utf-8');
```
设置响应的`Content-Type`为`text/html`并指定字符集为`UTF-8`，以确保响应正文中的中文字符不会出现乱码。

### 4.4 发送响应

```javascript
response.end('中文');
```
`response.end`方法用于发送响应体到客户端并结束响应。这里发送一个包含中文字符的字符串作为响应体。

### 4.5 监听端口

```javascript
server.listen(9000, () => {
  console.log('server open');
});
```
`server.listen`方法使服务器开始监听指定的端口（这里是9000端口）。一旦服务器成功开始监听端口，传递给`listen`方法的回调函数将被调用，输出“server open”到控制台。



## 5. 获取 HTTP 请求报文

### 5.1 解析HTTP请求

在处理HTTP请求时，我们关注以下几个核心部分来理解客户端的请求信息：

#### 1. 获取请求方法
```javascript
console.log(request.method);
```
##### 解析
- `request.method`：此属性用于获取HTTP请求的方法。HTTP协议定义了多种请求方法，其中最常用的是GET和POST。这两种方法分别用于获取资源和提交数据。

#### 2. 获取请求的URL
```javascript
console.log(request.url);   // url中的路径及查询参数
```
##### 解析
- `request.url`：这个属性包含了请求的URL。它通常包括路径和查询参数，有时也可能包含锚点。你可以通过解析这个URL来得知客户端请求的具体资源和传递的参数。

#### 3. 获取HTTP协议的版本号
```javascript
console.log(request.httpVersion);
```
##### 解析
- `request.httpVersion`：此属性用于获取客户端使用的HTTP协议版本号。虽然大多数请求可能使用HTTP/1.1，了解客户端使用的版本可以帮助我们以合适的格式或标准来响应请求。

#### 4. 获取HTTP请求头
```javascript
console.log(request.headers);
console.log(request.headers.host);
```
##### 解析
- `request.headers`：一个包含所有HTTP请求头的对象。请求头携带了关于客户端、响应的一些元信息。例如，`User-Agent`请求头提供了关于客户端类型和版本的信息，`Accept`请求头指定了客户端能处理的内容类型。
- `request.headers.host`：请求头中的`host`字段通常用于指定被请求资源的互联网主机和端口号，它通常从请求URL中提取出来。

### 5.2 处理请求体数据

处理请求体数据主要涉及到获取POST请求中的数据。在Node.js中，我们通过监听请求对象的`data`和`end`事件来获取请求体数据。

#### 1. **声明变量**：

```javascript
let body = '';
```
创建一个用于拼接请求体数据的变量`body`。

#### 2. **绑定data事件**：

```javascript
request.on('data', chunk => {
  body += chunk;
});
```
监听`data`事件并接收数据块，逐步构建请求体内容。

- `chunk`：这个参数代表接收到的数据片段，以缓冲区的形式提供，它是一个原始的二进制数据数组。
- `body += chunk`：这行代码将每个数据块添加到累加变量（`body`）中，最终在后续块到达时构建完整的数据集。

#### 3. **绑定end事件**：

```javascript
request.on('end', () => {
  console.log(body);
  response.end('Hello Http Server');
});
```
在`end`事件触发时，所有的数据块已经通过`data`事件接收完毕并拼接到`body`变量中。此时可以处理请求体数据并发送响应。

### 5.3 使用`url`模块解析请求的URL

在接收到HTTP请求时，我们可能需要解析请求的URL来获取请求的路径和查询参数。在Node.js中，我们可以使用`url.parse`方法来解析`request.url`并提取出这些信息。

#### 1. 引入`url`模块

```javascript
const url = require('url');
```

##### 解析

- 使用`require`函数导入Node.js的`url`模块。这个模块提供了一系列用于处理和解析URL的工具。

#### 2. 解析请求的URL

```javascript
let res = url.parse(request.url, true);
```
##### 解析
- `url.parse`：这是Node.js中用于解析URL的方法。第一个参数是要解析的URL字符串（这里是`request.url`），第二个参数是一个布尔值，决定是否将查询字符串解析成一个对象（这里是`true`）。
- `res`：这个变量存储解析后的URL对象，它包含了多个属性，如`pathname`和`query`，分别代表URL的路径和查询字符串。

#### 3. 获取路径
```javascript
let pathname = res.pathname;
```
##### 解析
- `res.pathname`：这个属性包含了不包括查询字符串的URL的路径部分。

#### 4. 获取查询字符串参数
```javascript
let keyword = res.query.keyword;
```
##### 解析
- `res.query`：当`url.parse`的第二个参数被设置为`true`时，这个属性会包含一个对象，它代表URL的查询参数。
- `keyword`：这里我们获取查询对象中名为`keyword`的参数的值。

### 5.4 使用`URL`类解析请求的URL

在Node.js中，除了`url.parse`方法，我们还可以使用`URL`类来解析和处理URL。这个类提供了一种更现代和直观的方式来解析、构造和修改URL。

以下是代码片段及其分析：

#### 1. 实例化`URL`对象
```javascript
let url = new URL(request.url, 'http://127.0.0.1');
```
##### 解析
- 使用`URL`构造函数创建一个新的URL对象。此函数接受两个参数：第一个是要解析的相对或绝对URL，第二个是基本URL（用于解析第一个参数中的相对URL）。在这里，我们使用`request.url`作为要解析的URL，并设置`http://127.0.0.1`作为基本URL。

#### 2. 获取路径
```javascript
console.log(url.pathname);
```
##### 解析
- `url.pathname`：此属性返回URL的路径部分，不包括查询字符串。

#### 3. 获取查询参数的值
```javascript
console.log(url.searchParams.get('a'));
```
##### 解析
- `url.searchParams`：这是一个`URLSearchParams`对象，表示URL的查询参数。这个对象提供了许多方法来处理查询参数，其中`get`方法可以用于获取指定查询参数的值。



### 6. 设置HTTP响应

当我们创建一个HTTP服务器时，正确设置HTTP响应非常关键，它决定了客户端（通常是浏览器）将如何处理我们的响应。以下分析了设置不同响应参数的方法：

#### 1. 设置响应状态码
```javascript
response.statusCode = 404;
```
##### 解析
- `response.statusCode`：这个属性允许我们设置HTTP响应的状态码。在这个例子中，我们设置状态码为404，表示“Not Found”。

#### 2. 设置响应状态描述
```javascript
response.statusMessage = 'haha';
```
##### 解析
- `response.statusMessage`：这个属性允许我们设置HTTP响应的状态描述。虽然这个描述通常由HTTP状态码定义，但我们可以自定义它提供更多的上下文或用于调试目的。

#### 3. 设置响应头
```javascript
response.setHeader('content-type', 'text/html;charset=utf-8');
```
##### 解析
- `response.setHeader`：这个方法允许我们设置HTTP响应头。在这个例子中，我们设置`content-type`响应头，告诉客户端响应体的内容类型和字符集。

#### 4. 设置自定义响应头
```javascript
response.setHeader('myHeader', 'abc');
```
##### 解析
- 我们也可以通过`setHeader`方法设置自定义的响应头。在这个例子中，我们设置了一个名为`myHeader`的自定义响应头。

#### 5. 设置多个名称相同的响应头
```javascript
response.setHeader('test', ['a', 'b', 'c']);
```
##### 解析
- `setHeader`方法也允许我们设置多个名称相同的响应头，只需要将第二个参数设置为一个数组。

#### 6. 设置响应体
```javascript
response.write('write1');
response.write('write2');
response.write('write3');
```
##### 解析
- `response.write`：这个方法允许我们写入响应体的数据。我们可以多次调用这个方法来发送响应体的不同部分。

#### 7. 优化响应体的发送

在处理HTTP响应时，我们可能需要发送文件内容作为响应体。在Node.js中，我们可以使用`fs`（文件系统）模块来读取文件内容，并将其作为响应体发送。

```javascript
const server = http.createServer((request, response) => {
  let html = fs.readFileSync(__dirname + '/10-优化.html');
  response.end(html);
});
```
- **读取文件内容**：使用`fs.readFileSync`同步读取文件内容。参数`__dirname + '/10-优化.html'`指定了文件的路径。注意，虽然这种同步方法在示例中易于理解，但在实际的服务器代码中，为了避免阻塞操作，通常应该使用异步方法（例如，`fs.readFile`）。
  
  ```javascript
  let html = fs.readFileSync(__dirname + '/10-优化.html');
  ```
  
- **发送响应体**：使用`response.end`方法将读取的文件内容作为响应体发送给客户端。这样，客户端（例如浏览器）将收到这个HTML文件，并渲染它作为一个网页。

  ```javascript
  response.end(html);
  ```
  

#### 8. 获取当前路径下文件的快捷方式

1. 获取路径

```js
const { pathname } = new URL(request.url, 'http://127.0.0.1')
```

2. 获取文件

   ```js
   let html = fs.readFileSync(__dirname + '/index.html')
   response.end(html)
   ```

## 7. 静态资源

处理静态资源是Web开发中的一个基础部分。在HTML文档中，我们经常需要引用外部的静态资源，例如CSS文件、JavaScript文件、图像、视频等。

### 7.1 绝对路径和相对路径

在HTML文档中，我们可以使用绝对路径或相对路径来指定静态资源的位置。

#### 1. 绝对路径

- **全路径**：
  
  ```html
   <a href="https://www.baidu.com">baidu</a>
  ```
  网站的外链通常会使用此形式。
  
- **协议相对路径**：
  
  ```html
  <a href="//jd.com">jd</a>
  ```
  与页面URL的协议拼接形成完整URL再发送请求。在大型网站中用得比较多。
  
- **根相对路径**：
  
  ```html
  <a href="/search">search</a>
  ```
  与页面URL的协议、主机名、端口拼接形成完整URL再发送请求。常见于中小型网站。

#### 2. 相对路径

```html
<a href="./css/app.css"> app.css </a>
<a href="js/app.js"> app.js </a>
<a href="../img/img.png"> img.png </a>
<a href="../../mp4/sang.mp4"> sang.mp4 </a>
```

#### 3. URL使用场景小结

在网页中，URL可以在多种场景下使用，包括但不限于以下情况：
- `<a>` 标签的 `href` 属性
- `<link>` 标签的 `href` 属性
- `<script>` 标签的 `src` 属性
- `<img>` 标签的 `src` 属性
- `<video>` 和 `<audio>` 标签的 `src` 属性
- `<form>` 标签中的 `action` 属性
- AJAX请求中的URL
  

## 8. 设置资源类型（MIME类型）

在HTTP响应中，`Content-Type`响应头表示资源的MIME类型，它告诉客户端如何解释和显示响应的内容。例如，浏览器使用这个头部来决定是否应该显示内容、播放内容、或者下载内容。

```javascript
const http = require('http')
const fs = require('fs')
const path = require('path')
```
1. **导入必要的模块**
   - `http`: 用于创建HTTP服务器。
   - `fs`: 用于文件系统操作，比如读取文件。
   - `path`: 用于处理文件和目录的路径。

```javascript
const mime = {
  html: 'text/html',
  css: 'text/css',
  // ... 其他MIME类型
}
```
2. **设置MIME类型表**
   - 使用一个对象来映射文件扩展名到其对应的MIME类型。这样我们可以根据文件的扩展名来设置正确的`Content-Type`响应头。

```javascript
const server = http.createServer((request, response) => {
  //...
});
```
3. **创建HTTP服务器**
   - 使用`http.createServer`创建一个HTTP服务器。该函数接受一个回调函数作为参数，该回调函数会在每个HTTP请求到达时被调用。

```javascript
if(request.method !== 'GET') {
    response.statusCode = 405;
    response.end(`<h1> 405 Method Not Allowed</h1>`);
}
```
4. **判断请求方法**
   - 如果请求的HTTP方法不是`GET`，服务器返回状态码405，表示方法不被允许。

```javascript
const { pathname } = new URL(request.url, 'http://127.0.0.1');
```
5. **获取URL路径地址**
   - 使用`URL`对象解析请求的URL，并从中提取路径部分。

```javascript
const filePath = __dirname + '/page' + pathname;
```
6. **设置资源路径**
   - 构建文件的完整文件路径，`__dirname`是当前脚本所在的目录。

```javascript
fs.readFile(filePath, (err, data) => {
  //...
});
```
7. **读取文件**
   - 使用`fs.readFile`异步读取文件内容。第一个参数是文件的路径，第二个参数是一个回调函数，该函数在文件读取完毕后被调用。

```javascript
let ext = path.extname(filePath).slice(1);
let type = mime[ext];
```
8. **获取并设置MIME类型**
   - 使用`path.extname`获取文件的扩展名，并使用前面定义的`mime`对象查找对应的MIME类型。
   
```javascript
response.setHeader('content-type', type + ';charset=utf-8');
```
9. **设置响应头的MIME类型**
   - 通过`response.setHeader`设置`Content-Type`响应头，以指示资源的MIME类型。对于HTML文件，还指定字符编码为UTF-8。

```javascript
if(err) {
    switch(err.code) {
        //...
    }
    return;
}
```
10. **错误处理**
    - 如果读取文件时发生错误（`err`不为`null`），根据错误类型设置HTTP状态码和返回一个错误页面。

```javascript
response.end(data);
```
11. **发送响应**
    - 使用`response.end`发送响应体并结束响应。这里，响应体是读取到的文件内容。

```javascript
server.listen(9000, () => {
  console.log('success');
});
```
12. **启动服务器**
    - 使用`server.listen`启动服务器并在端口9000上监听入站连接。当服务器成功启动时，控制台将打印`"success"`。
