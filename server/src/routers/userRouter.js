const router = require('express').Router()
const {
    addUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser } = require('../controllers/userController')

const { checkUser } = require('../middleware/auth')
     
router.post('/create', addUser) 
router.get('/getUser', getUser)
router.get('/getUsers/:meet_id', checkUser, getUsers)
router.patch('/updateUser',  updateUser)
router.delete('/deleteUser/:regno', checkUser, deleteUser)

module.exports = router