const router = require('express').Router()
const db = require('../../db')
const User = db.users
const {
    addUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser } = require('../controllers/userController')

const { checkUser } = require('../middleware/auth')
     
router.post('/create', checkUser, addUser)
router.get('/getUser/:regno', checkUser, getUser)
router.get('/getUsers/:meet_id', checkUser, getUsers)
router.patch('./updateUser/:regno', checkUser, updateUser)
router.delete('./deleteUser', checkUser, deleteUser)
// router.post('/create', async (req, res)=>{
//     try {
//         const user = await User.create(req.body)
//         res.status(200).send(user)
//     }
//     catch(err){
//         console.error(err.message);
//     }
// })
router.delete('/delete/:regno', async (req, res)=>{
    try {
        const regno = req.params.regno;
        const user = await User.destroy({
            where: {reg_no:regno}
        })
        res.status(200).send(user)
    } catch (err) {
        console.error(err.message);
    }
})
module.exports = router