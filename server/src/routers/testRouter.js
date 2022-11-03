const router = require('express').Router()
const { hello, testtimetable } = require('../controllers/testController')
const { testMid } =  require('../middleware/testMiddleware')

router.post('/test', hello)
router.post('/timetable', testtimetable)
module.exports = router