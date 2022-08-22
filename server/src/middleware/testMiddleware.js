const testMid = (req, res, next)=>{
    req.body.hi = "Warsi"
    next()
    console.log('middleware hit!')
}
module.exports = {testMid}