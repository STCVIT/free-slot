const router = require('express').Router()
const {
    addUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser } = require('../controllers/userController')

const { signup, authLog } = require('../middleware/auth')
     
router.post('/create', signup, addUser) 
router.get('/getUser', getUser)
router.get('/getUsers/:meet_id', getUsers)
router.patch('/updateUser', updateUser)
router.delete('/deleteUser/:regno', deleteUser)

module.exports = router