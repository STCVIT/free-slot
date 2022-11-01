const express = require('express');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
//const csrf = require('csurf')
//const csrfMiddleware = csrf({cookie:true})
//hosting
//require('dotenv').config({path: path.resolve(__dirname, './.env')})

//locally running
require('dotenv').config({path: path.resolve(__dirname, '../.env')})
const cors = require('cors');
const app = express();
const whitelist = ['http://127.0.0.1:3000',"http://localhost:3000"]
const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.indexOf(origin!==-1)){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS!'))
        }
    },
    methods: ["GET, POST, PUT, PATCH, DELETE"],
    allowHeaders: '*'
}

require('./db/db')
require('./associations')

const userRouter = require('./routers/userRouter')
const teamRouter = require('./routers/teamRouter')
const meetRouter = require('./routers/meetRouter')
const freeSlotRouter = require('./routers/freeSlotRouter')
const testRouter = require('./routers/testRouter')

app.use(express.urlencoded({ limit: '50mb', extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(cors(corsOptions))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(cookieParser())
//app.use(csrfMiddleware)

app.use('/user', userRouter)
app.use('/team', teamRouter)
app.use('/meet', meetRouter)
app.use('/timetable', freeSlotRouter)
app.use('/test', testRouter)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../index.html"))
})
app.get('*', (req,res)=>{
    res.redirect('/')
  })
// app.all('*', (req,res,next)=>{
//     res.cookie("XSRF-TOKEN", req.csrfToken())
//     next()
// })
module.exports = app