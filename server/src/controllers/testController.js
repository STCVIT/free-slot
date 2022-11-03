const { BadRequestError, NotFoundError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler')
const db = require('../db/db')
const User = db.users
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