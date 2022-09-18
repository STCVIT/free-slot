const hello = (req, res, next)=>{
    res.send("response bhej rha")
    console.log("response bhej rha")
}
module.exports = { hello }