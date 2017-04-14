const express = require('express')
const router = express.Router()
const log = require('../log4')('index')

/* GET home page. */
router.get('/', function (req, res, next) {
    log.info('info: index page')
    res.render('index', {title: 'Express'})
})


module.exports = router
