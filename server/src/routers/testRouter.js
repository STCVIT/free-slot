const router = require('express').Router()
const { hello } = require('../controllers/testController')
const { testMid } =  require('../middleware/testMiddleware')

router.post('/create', testMid, hello)
module.exports = router