const router = require('express').Router()
const {
    addUserInDb,
    getUser,
    getUsers,
    updateUser,
    deleteUser } = require('../controllers/userController')

const { checkUser, sessionLogout, sessionLogin } = require('../middleware/auth')

router.post('/create', addUserInDb)
router.get('/getUser',checkUser, getUser)
router.get('/getUsers/:meet_id', getUsers)
router.patch('/updateUser',checkUser, updateUser)
router.delete('/deleteUser/:regno',checkUser, deleteUser, sessionLogout)
router.post('/sessionlogin', sessionLogin)
router.post('/sessionlogout', sessionLogout)

module.exports = router