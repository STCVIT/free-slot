const db = require('../db/db')
const Meet = db.meets;
const { NotFoundError, BadRequestError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler')

//Adding Meet
const addMeet = async (req, res)=>{
    try {
        const meet = await Meet.create(req.body);
        res.status(201).send(meet)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

//Get meet
const getMeet = async (req, res)=>{
    try {
        const meet = await Meet.findOne({
            where: {id: req.params.meet_id}
        })
        if(!meet){
            return errorHandler(new NotFoundError, req, res)
        }
        res.status(201).send(meet)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

//Get meets...needs to be fixed
const getMeets = async (req, res)=>{
    try {
        const meets = await Meet.findAll({
            where: {id: req.params.meet_id}
        }).sort()
        if(!meets){
            return errorHandler(new NotFoundError, req, res)
        }
        res.status(201).send(meets)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

//upadte meet
const updateMeet = async (req, res)=>{
    const updates = Object.keys(req.body)
    try{
        let id = req.params.id
        if(!id || id == undefined){
            return res.status(418).send("Meet does not exist")
        }
        const meet = await User.findOne({
            where: {id: meet_id}
         })
        if(!meet) {
            return errorHandler(new NotFoundError, req, res)
        }
        updates.forEach((update)=> (meet[update] = req.body[update]));
        await meet.save()
        res.status(200).send(meet)
    }
    catch(error){
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}

//delete meet
const deleteMeet = async (req, res)=>{
    try {
        let id = req.params.meet_id
        if(!id || id == undefined){
            return res.status(418).send("Meet does not exist")
        }
        const meet = await Meet.findOne({
            where: {id: id}
         })
         if(!meet) {
            return errorHandler(new NotFoundError, req, res)
        }
        await meet.destroy()
        res.status(200).send(meet)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
module.exports = {
    addMeet,
    getMeet,
    getMeets,
    updateMeet,
    deleteMeet
}