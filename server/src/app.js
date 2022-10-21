const express = require('express');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})
const cors = require('cors');
const app = express();

require('./db/db')
require('./associations')

const userRouter = require('./routers/userRouter')
const teamRouter = require('./routers/teamRouter')
const meetRouter = require('./routers/meetRouter')
const freeSlotRouter = require('./routers/freeSlotRouter')
const testRouter = require('./routers/testRouter')

app.use(express.urlencoded({ limit: '50mb', extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(
    cors({
        origin: "*",
        methods: ["GET, POST, PUT, PATCH, DELETE"],
        allowHeaders: '*'
    })
)
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
//app.use(cookieParser())

app.use('/user', userRouter)
app.use('/team', teamRouter)
app.use('/meet', meetRouter)
app.use('/timetable', freeSlotRouter)
app.use('/test', testRouter)

app.get('/', (req, res)=>{
    res.send("lol")
})
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
  })
module.exports = app