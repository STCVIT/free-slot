const router = require('express').Router()
const { link } = require('../controllers/linkController')

router.post('/', link)
module.exports = router
