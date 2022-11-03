const db = require('../db/db')
const User = db.users
const {freeSlotSs, busy_time} = require('./freeSlotScreenshot')
const {freeSlotCopyPaste} = require('./freeSlotCopyPaste')
const { BadRequestError, NotFoundError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler')
const axios = require('axios')

//get the first user timetable...incomplete
const checkFreeSlot = async (req, res, next)=>{
    try {
        const timetables = await User.findAll({
            where: {reg_no: req.body}
            }, 
            { attributes: timetables
        })
        if(!timetables || timetables==undefined){
                return errorHandler(new NotFoundError, req, res)
            }
        const final = freeSlotSs(timetables)
        res.status(200).send(final)
    }
    catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
//adding timetbale of user by screenshot method
const freeSlotScreenshot = async(req, res, next)=>{
    try {
        const timetable = await User.update(
            {timetable: busy_time(req.body.timetable)}, {where: {email: req.body.email}}
        )
        res.status(200).send(timetable)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
//adding timetbale of user by copy-paste method
const freeSlotCp = async(req, res, next)=>{
    try {
        const timetable = await User.update(
            {timetable: freeSlotCopyPaste(req.body.timetable)},
            {where: {reg_no: req.body.regno}}
        )
        res.status(200).send(timetable)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
const freeslotML = (req, res, next)=>{
    //var MLoutput = ""
    const string = req.body.file
    axios.post('http://localhost:5000/', {string})
    .then((res)=>{
        const MLoutput = res.data;
        req.body.timetable=MLoutput
        next()
    })
    
}
module.exports = { checkFreeSlot, freeSlotScreenshot, freeSlotCp, freeslotML}