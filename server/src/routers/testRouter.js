const router = require('express').Router()
const { hello } = require('../controllers/testController')
const { testMid } =  require('../middleware/testMiddleware')

router.post('/test', hello)
module.exports = router