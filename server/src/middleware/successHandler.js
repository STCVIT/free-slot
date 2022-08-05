const successHandler = (success, res)=>{
    return res.status(success.statusCode).send({
        statusCode: success.statusCode,
        message: success.message
    })
}
module.exports = successHandler