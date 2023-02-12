const db = require('../db/db')
const User = db.users
const {getFreeSlotsUsers, busy_time} = require('./freeSlotScreenshot')
const freeSlotCopyPaste = require('./freeSlotCopyPaste')
const { BadRequestError, NotFoundError, InvalidEmail, CouldNotExtractData, InvalidData } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler')
const axios = require('axios')
const moment = require('moment')

//get the first user timetable...incomplete
const checkFreeSlot = async (req, res, next)=>{
    try {
        const timetables = await User.findAll(
            { where: {reg_no: req.body.members},
            attributes: ['timetable']}
            )
        if(!timetables || timetables==undefined){
                return errorHandler(new NotFoundError, req, res)
            }
        const final = getFreeSlotsUsers(timetables)
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
        let email = req.body.email
        if(!email || email == undefined){
        return errorHandler(new InvalidData("Email Not Provided"), req, res)
        }
        const timetable = await User.update(
            {timetable: busy_time(req.body.timetable)}, {where: {email: email}}
        )
        res.sendStatus(200)
    } catch (error) {
        errorHandler(new CouldNotExtractData, req, res)
        console.error(error.message);
    }
}
//adding timetable of user by copy-paste method
const freeSlotCp = async(req, res, next)=>{
    try {
        let email = req.body.email
        if(!email || email == undefined){
            return errorHandler(new InvalidData("Email Not Provided"), req, res)
        }
        let pastedTimetable = freeSlotCopyPaste(req.body.timetable)
        if(!pastedTimetable[0][0] || pastedTimetable[0][0] == undefined){
            return errorHandler(new InvalidData("Invalid Tiemtable Provided"),req,res)
        }
        const timetable = await User.update(
            {timetable: pastedTimetable},
            {where: {email: email}}
        )
        // res.status(200).send(timetable)
        res.sendStatus(200)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
const freeslotML = async(req, res, next)=>{
    //var MLoutput = ""
    const string = req.body.file
    await axios.post('https://freeslot.azurewebsites.net/', {string})
    .then((res)=>{
        const MLoutput = res.data;
        req.body.timetable=MLoutput
        next()
    })
    .catch((err)=>{
        console.error(err.message)
        errorHandler(new BadRequestError,req, res)
    })
    
}
const addSlot = async (req, res)=>{
    try {
        const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
        const day = moment(req.body.date, "YYYY-MM-DD").format('dddd') 
        const obj = {start_time:req.body.start_time, end_time: req.body.end_time, type: "meet"}
        const timetables = await User.findAll({
            where: {reg_no: req.body.members},
            attributes: ["timetable"]
        })
        for(var i=0; i<days.length; i++){
            if(day===days[i]){
                for (var j=0; j<timetables.length; j++){
                    timetables[j].timetable[i].push(obj)
                }
            }
        }
        // res.status(200).send(timetables)
        res.sendStatus(200)

    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
module.exports = { checkFreeSlot, freeSlotScreenshot, freeSlotCp, freeslotML, addSlot }