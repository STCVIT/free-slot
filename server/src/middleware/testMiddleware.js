const testMid = (req, res, next)=>{
     req.body.hi = "Sarim"
    next()
}
module.exports = {testMid}