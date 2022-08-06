const db = require('../db/db')
const User = db.users
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
        const final = freeSlot(...timetables)
        res.status(200).send(final)
    }
    catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
// freeslot for two users
const freeSlot = (a,b, ...args)=>{
    let final = []
    head = ["Mon:Thry", "Mon:Lab", "Tue:Thry", "Tue:Lab", "Wed:Thry", "Wed:Lab", "Thu:Thry", "Thu:Lab", "Fri: Thry", "Fri:Lab"]
    for (var i=0; i< 10; i++){
        final.push(new Object())
        for (var j=0; j< 14; j++){
            final[i][0] = head[i]
            if ((Object.values(a[i])[j]===Object.values(b[i])[j])) {
                final[i][j] = "YES"
            } else {
                final[i][j] = "NO"
            }
        }
    }
    console.log(final)
    return final
}
console.log("freeslot hitting")
module.exports = checkFreeSlot