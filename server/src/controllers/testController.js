const { BadRequestError, NotFoundError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler')
const db = require('../db/db')
//const moment =require('moment');
// const mom1 = moment().format("D MMM, YYYY")
// const mom1 = moment().isoWeekday()
// const mom2 = moment().add(1,'week').format("D MMM, YYYY")
// {index+1<moment().isoWeekday() ? moment().format("D MMM, YYYY"): moment().add(1,'week').format("D MMM, YYYY")}
// console.log(mom1)
// console.log(mom2)
// const User = db.users
const hello = (req, res, next)=>{
    res.send("response bhej rha")
    console.log("response bhej rha")
}
const testtimetable = async (req, res)=>{
    try {
        const timetable = await User.update(
            {timetable: req.body.timetable}, {where: {email: req.body.email}}
        )
        res.status(200).send(timetable)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
module.exports = { hello, testtimetable }