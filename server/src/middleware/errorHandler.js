const errorHandler = (err, req, res)=>{
    return res.status(err.statusCode).send({
        code: err.statusCode,
        message: err.message
    })
}
module.exports = errorHandler