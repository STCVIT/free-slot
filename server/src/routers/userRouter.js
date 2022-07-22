const express = require('express')
const router = express.Router()
const db = require('../../db')
const User = db.users

router.post('/create', async (req, res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).send(user)
    }
    catch(err){
        console.error(err.message);
    }
})
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