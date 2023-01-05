const router = require('express').Router()
const { link } = require('../controllers/linkController')
const {addTeamByLink} = require('../middleware/teamFunctions')
const {getUserReg} = require('../middleware/userFunctions')
const {checkUser} = require('../middleware/auth')
router.post('/', checkUser, getUserReg, addTeamByLink, link)
module.exports = router
