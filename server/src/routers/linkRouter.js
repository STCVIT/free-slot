const router = require('express').Router()
const { link } = require('../controllers/linkController')
const {addTeamByLink} = require('../controllers/teamController')
const {getUserReg} = require('../controllers/userController')
const {checkUser} = require('../middleware/auth')
router.post('/', checkUser, getUserReg, addTeamByLink, link)
module.exports = router
