# 00-Node基础

## 命令行的常用命令

1. 进入盘符：`D:`
2. 查看当前文件夹文件：`dir`
3. 进入文件夹：`cd Vue`
4. 返回上一级：`cd ..`

---

## `Node.js`不能使用的对象

### 1. DOM对象

#### 1.1 window

代表浏览器的窗口或者框架;其他BOM对象的父对象

```js
// 打开一个新窗口
window.open('url')
```

#### 1.2 location

提供Url交互能力

```js
// 获取当前页面的URL
var currentURL = window.loaction.href

// 重定向到另一个页面
window.location.href = 'url'

// 重新加载当前页面
window.location.reload()
```

#### 1.3 navigator

提供关于浏览器的信息

```js
// 获取浏览器名称和版本
var browserName = window.navigator.appName
var browserVersion = window.navigator.appVersion

// 检查是否支持cookie
var cookiesEnabled = window.navigator.cookieEnabled
```

#### 1.4 history

提供浏览器历史记录的交互功能

```js
// 后退到上一个页面
window.history.back()

// 前进到下一个页面
window.history.forward()

// 跳转到历史记录的特定页面
window.history.go(-2) // 跳转到前两个页面
```

### 2. DOM对象

`document` -- 整个文档，是DOM树的

```js
let title = document.title
```

### 3. AJAX对象

```js
let xhr = new XMLHttpRequest()
```

---

## `Node.js`可以使用的对象

### 1. log函数

```js
console.log('xxx')
```

### 2. 定时器函数

```js
setTimeout(() => {
	console.log(123)
}, 1000)
```

### 3. gobal对象/gobalThis -- node的顶级对象

```js
console.log(global)
console.log(globalThis)
console.log( global === globalThis ) // true
```

