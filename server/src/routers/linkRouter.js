const router = require('express').Router()
const { link } = require('../controllers/linkController')

router.get('/', link)
module.exports = router
