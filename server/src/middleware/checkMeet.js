//get this checked
const db = require('../db/db')
const Meet = db.meets
const { BadRequestError, DuplicateMeetError } = require('../utilities/error')

//not sure about this
const checkMeet = async (meet)=>{
    try {
        let check = meet.ids.filter((id)=>{
            if(String(id) == String(meet[meet.id.length-1].id)){
                return id
            }
            if (check.length==0) {
                const error  = new DuplicateMeetError
                return error
            }

        })
    } catch (error) {
        return new BadRequestError
    }
}
module.exports = checkMeet