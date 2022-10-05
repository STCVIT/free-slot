const link = (req, res, next)=>{
    var uuid = require('node-uuid');
    var randomID = uuid.v4();
    var url = 'http://localhost:3000/timetable/' + randomID;
    res.send(url)
}
module.exports = { link }