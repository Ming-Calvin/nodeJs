const express = require('express')

// 创建路由对象
const router = express.Router()


router.get('/admin', (req, res) => {
  res.send('/admin')
})

router.get('/setting', (req, res) => {
  res.send('/setting')
})

module.exports = router
