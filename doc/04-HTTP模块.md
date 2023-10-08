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



## 