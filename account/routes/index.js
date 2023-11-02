var express = require('express');
var router = express.Router();

// 导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')

// 导入shortid 用于随机生成 id
const shortid = require('shortid')

// 获取db对象
const db = low(adapter)

/* GET home page. */
router.get('/account', function(req, res, next) {
  let list = db.get('account').value()

  res.render('list', { list });
});

router.get('/account/create', (req, res) => {

  res.render('create')
})

router.post('/account', (req, res) => {
  // 生成id
  let id = shortid.generate()

  db.get('account').unshift({ id, ...req.body }).write()

  res.render('success', { msg: 'add success!!!', url: '/account' })
})

router.get('/account/delete/:id', (req, res) => {
  // 获取id
  let id = req.params.id

  db.get('account').remove({ id }).value()

  res.render('success', { msg: 'delete success!!!', url: '/account' })
})

module.exports = router;
