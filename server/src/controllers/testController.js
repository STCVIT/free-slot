const hello = (req, res, next)=>{
    req.body.hi="Warsi"
    res.send(req.body)
}
module.exports = { hello }