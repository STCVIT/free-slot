const router = require('express').Router()
const { link } = require('../controllers/linkController')
const {addTeamByLink} = require('../controllers/teamController')
const {getUserReg} = require('../controllers/userController')
router.post('/', getUserReg, addTeamByLink, link)
module.exports = router
