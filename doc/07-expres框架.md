# 07-express

## 1. 使用express

### 1.1 安装express

```js
npm init
npm install express
```

### 1.2 使用

1. 导入express

   ```
   const express = require('express')
   ```

2. 创建express对象

   express 是函数不是类，所以创建时直接调用即可

   ```js
   const app = express()
   ```

3. 创建路由

   ```js
   app.get('/home', (req, res) => { 
       res.send('hello')
   })
   ```

4. 监听端口

   ```js
   app.listen(3000, () => { })
   ```



## 2. express路由

路由由 '请求方法'、'路径'和'回调函数'构成

1. get请求

   ```js
   app.get('/', (req, res) => {
   	res.send('get')
   })
   ```

2. post请求

   ```js
   app.post('/', (req, res) => {
   	res.send('post')
   })
   ```

3. 所有请求

   ```js
   app.all('/test', (req, res) => {
   	res.send('all')
   })
   
   // 当没有匹配的路由时返回404页面
   app.all('*', (req, res) => {
       res.send(`<h1> 404 </h1>`)
   })
   ```



## 3. express 获取请求参数

### 3.1 原生操作

1. 请求方法：`req.method`
2. 请求地址：`req.url`
3. HTTP版本：`req.httpVersion`
4. 请求头：`req.headers`

### 3.2 express 操作

1. 请求地址：`req.path`
2. 请求参数（查询字符串）：`req.query`
3. IP地址：`req.ip`
4. 获取指定的请求头参数：`req.get('Header-Name')`  # 注意，这里我使用了'Header-Name'代替'host'，因为req.get可以用来获取任何指定的请求头参数。

> **问题**：`req.path` 和 `req.url` 的区别是什么？
>
> 1. `req.path` 返回的只是URL的路径部分。例如，对于 `http://127.0.0.1/users?name=xm`，`req.path` 会返回 `/users`。
> 2. `req.url` 返回URL的路径部分加上查询字符串。继续上述例子，`req.url` 会返回 `/users?name=xm`。
>
> 因此，理论上，`req.url` 可以看作是 `req.path` 和查询字符串的组合，但请注意 `req.query` 返回的是一个对象，不是字符串。



## 4. express 获取路由参数

```js
app.get('/:id.html', (req, res) => {
    // 获取路由参数
    console.log(req.params);
    // 获取参数中的id
    console.log(req.params.id);
});
```



> **问题**：路由参数和查询字符串参数有什么不同？
>
> - **路由参数**：路由参数出现在URL地址中, 通常用于定位资源。例如：
>   
>   ```js
>   app.get('/user/:userId', (req, res) => { })
>   ```
>   此时，如果访问的URL是 `/user/123`，则 `userId` 的值为 `123`。
>   
> - **查询字符串参数**：查询字符串参数位于URL地址的末尾，以`?`开始，不同的参数之间用`&`链接。例如：
>   
>   ```
>   /user?userId=123
>   ```
>   此时，查询字符串为 `userId=123`。



## 5. express 响应设置

### 5.1 原生响应

1. 响应状态码：`res.statusCode = 404`
2. 响应信息：`res.statusMessage = 'abc'`
3. 响应头：`res.setHeader('xxx', 'yyy')`
4. 写入响应体的部分内容：`res.write('hello')`
5. 结束响应并可选地发送数据：`res.end('hello')`

### 5.2 express 响应

1. 响应状态码：`res.status(500)`
2. 响应头：`res.set('aaa', 'bbb')`
3. 响应体：`res.send('hhhh')`
   
   注意：使用 `send` 时，响应头会自动加上 `Content-Type: text/html; charset=utf-8`

Express设置响应时，可以链式调用：

```js
res.status(500).set('aaa', 'bbb').send('xxx')
```

### 5.3 其他响应

1. **跳转响应**：使用 `res.redirect()` 方法进行重定向到指定的URL。例如：
   ```js
   res.redirect('https://baidu.com')

2. **下载响应**：使用 `res.download()` 方法向客户端提供一个文件下载。例如：

   ```js
   res.download(__dirname + '/package.json')
   ```

3. **JSON响应**：使用 `res.json()` 方法发送一个JSON格式的响应。例如：
	
   ```js
   res.json({ name: 'xm', age: 123 })
   ```


4. **文件响应**：使用 `res.sendFile()` 方法返回一个文件。例如：

   ```js
   res.sendFile(__dirname + '/test.html')
   ```
   
   

## 6. express中间件

### 6.1 中间件是什么

中间件是一个回调函数，可以接收request和response参数，内部处理后，使用next()继续后面的操作。用于封装公共的操作。

### 6.2 全局中间件

1. 使用具名函数

   声明中间件函数

   ```js
   functon recordMiddleware(req, res, next) {
   	let { url, ip } = req
   	
   	// 保存信息
   	fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`)
   	// 调用next
   	next();
   }
   ```

   // 使用中间件函数

   ```js
   app.use(recordMiddleware)
   ```

2. 使用匿名函数

   ```js
   app.use(function() (req, res, next) {
   	let { url, ip } = req
   	
   	// 保存信息
   	fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`)
   	// 调用next
   	next();
   })
   ```

### 6.3 路由中间件

将中间件函数，放在要执行的方法之中

```js
app.get('/admin', middleware, (req, res) => { ... })
```

### 6.4 静态资源中间件

1. 设置静态资源中间件，默认如果URL根路径被请求，会返回文件夹中的index.html文件。

```js
app.use(express.static(path.join(__dirname, 'public')))
```

> 问题：为什么 `require` 使用相对路径，但是在静态资源中间件时使用绝对路径？
>
> - `require` 用于导入模块时，会根据模块文件相对于当前文件的位置解析路径，这是 Node.js 的模块解析机制所决定的。
> - 静态资源中间件和其他的文件系统操作通常使用从应用程序根目录开始的绝对路径，以避免由于启动命令的当前工作目录不同而导致的文件路径解析错误。
>
> 例如，给定文件目录结构：
>
> ```
> /myapp
>     /modules
>         helper.js
>     /public
>         image.jpg
>     index.js
> ```
>
> - 使用 `require`：
>
>   ```js
>   const helper = require('./modules/helper')
>   ```
>
>   这里使用相对路径，`require` 将以当前文件 `index.js` 的位置为基点来解析路径。
>
> - 设置静态资源中间件：
>
>   ```js
>   app.use('/static', express.static(path.resolve(__dirname, 'public')))
>   ```
>
>   这里使用 `__dirname` 来确保无论应用是从哪个工作目录启动的，路径都能被正确解析到 `/myapp/public`。

2. 如果有多个中间件可能响应同一个请求，它们会按照在代码中出现的顺序被调用。

```js
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
 res.send('111')
})

// 如果在/public目录下存在index.html文件，对根URL的请求将此文件作为响应，并结束响应流程，而不会进入到下面的路由。
// 如果不存在文件，则会调用static中的next方法，让请求继续往下面的中间件和路由中走
```
## 7. 获取请求体数据 body-parser

### 7.1 form表单

- action: 服务器上的url

- methods: 提交方法

- enctype: encoding type 编码方式 

  默认：application/x-www-form-urlencoded 上传文件：multipart/form-data

- target: 响应显示的位置

-  novalidate: 不进行验证



```html
<form action="/login" method="post" enctype="application/x-www-form-urlencoded">
    <label for="usrName">用户名：</label>
    <input type="text" name="userName">
    
    <button type="submit"> 提交 </button>
    <button type="reset"> 重置 </button>
  </form>
```

### 7.2 使用 body-parser 来解析响应体

- 

