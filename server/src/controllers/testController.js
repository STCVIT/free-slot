const { BadRequestError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler')
const test = async (req, res)=>{
    try {
        res.status(200).send("test is working")
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
module.exports = test