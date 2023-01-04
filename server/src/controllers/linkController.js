const link = (req, res, next)=>{
    var { v4:uuidv4} = require('uuid');
    var randomID = uuidv4();
    var url = 'http://localhost:3000/' + randomID;
    res.status(200).send(url)
}
module.exports = { link }