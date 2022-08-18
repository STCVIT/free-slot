const db = require('../db/db')
const User = db.users
const {freeSlot} = require('./freeSlot')
const { BadRequestError, NotFoundError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler')

//get the first user timetable
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
        const final = freeSlot(timetables)
        res.status(200).send(final)
    }
    catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}

module.exports = checkFreeSlot