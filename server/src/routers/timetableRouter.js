const express = require('express')
const router = express.Router()
const db = require('../../db')
const TT = db.timetables

router.post('/create', async (req, res)=>{
    try {
        const tt = await TT.create(req.body)
        res.status(200).send(tt)
    }
    catch(err){
        console.error(err.message);
    }
})
router.put('/update/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const new_tt = req.body.new_tt
        const tt = await TT.update({
            tt: new_tt
        }, 
            {
            where: {id:id}
        })
        res.status(200).send(tt)
    } catch (err) {
        console.error(err.message);
    }
})
module.exports = router