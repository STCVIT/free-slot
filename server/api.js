const express = require('express');
const app = express()
const router = express.Router()
const cors = require('cors')
const whitelist = ['http://127.0.0.1:8080']

const corsOptions = {
    origin: (origin, callback)=>{
        if(whitelist.indexOf(origin)!== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
router.search(express.json())
router.use(cors(corsOptions))

router.get('/hello', (req, res)=>{
    res.send('API REQUEST RESPOSNE')
})

module.exports = router