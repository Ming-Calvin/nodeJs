var express = require('express');
var router = express.Router();

// 导入
const formidable = require('formidable')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页的表单
router.get('/portrait', (req, res) => {
  res.render('portrait')
})

// 处理文件上传
// router.post('/portrait', (req, res) => {
//   // 创建 form 对象
//   const form = formidable({ mutiples: true })
//
//   // 解析请求报文
//   form.parse(req, (err, fields, files) => {
//     if(err) {
//       next(err);
//       return
//     }
//
//     console.log(fields)
//     console.log(files)
//   })
//
//   res.send('ok')
// })

module.exports = router;
