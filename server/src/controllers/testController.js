const hello = (req, res, next)=>{
    res.send(req.body)
}
module.exports = { hello }