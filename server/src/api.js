const express = require('express')
const router = express.Router()
const cors = require('cors')

const whitelist = ['http://172.16.83.3:3000']

// var corsOptions = {
//     origin: function(origin, callback){
//         if(whitelist.indexOf(origin) !== -1){
//             callback(null, true)
//         } else {
//             callback(new Error('not allowed by cors'))
//         }
//     }
// }
var corsOptions = {
    origin: '*'
}
router.use(express.json())
router.use(cors(corsOptions))
router.get('/api', (req, res, next)=>{
    res.send('This is API response')
})
module.exports = router
