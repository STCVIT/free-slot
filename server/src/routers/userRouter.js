const router = require('express').Router()
const {
    addUserInDb,
    addUserInFirebase,
    getUser,
    getUsers,
    updateUser,
    deleteUser } = require('../controllers/userController')

const { signup, authLog } = require('../middleware/auth')
     
router.post('/create', addUserInDb, addUserInFirebase)
router.get('/getUser', getUser)
router.get('/getUsers/:meet_id', getUsers)
router.patch('/updateUser', updateUser)
router.delete('/deleteUser/:regno', deleteUser)

module.exports = router