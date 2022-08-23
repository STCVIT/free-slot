const router = require('express').Router()
const { getHome } = require('../controllers/homeController')
const { sessionLogin, sessionLogout, signup } = require('../middleware/auth')

router.get('/home', getHome)
router.post('/signup', signup)
router.post('/sessionLogin', sessionLogin)
router.get('/sessionLogout', sessionLogout)

module.exports = router