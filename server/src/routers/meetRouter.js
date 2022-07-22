const express = require('express')
const router = express.Router()
const db = require('../../db')
const Meet = db.meets

router.post('/create', async (req, res)=>{
    try {
        const meet = await Meet.create(req.body)
        res.status(200).send(meet)
    }
    catch(err){
        console.error(err.message);
    }
})
router.delete('/delete/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const meet = await Meet.destroy({
            where: {id:id}
        })
        res.status(200).send(meet)
    } catch (err) {
        console.error(err.message);
    }
})
module.exports = router