const express = require('express');
const path = require('path')
//hosting
//require('dotenv').config({path: path.resolve(__dirname, './.env')})

//locally running
//require('dotenv').config({path: path.resolve(__dirname, '../.env')})
const cors = require('cors');
const app = express();
const whitelist = ['http://127.0.0.1:3000','http://localhost:3000', 'https://develop.free-slot.pages.dev', 'http://localhost:4000']
const corsOptions = {
    origin: '*',
    // origin: function(origin, callback){
    //     if(whitelist.indexOf(origin)!==-1){
    //         callback(null, true)
    //     } else {
    //         callback(new Error('Not allowed by CORS!'))
    //     }
    // },
    methods: ["GET, POST, PUT, PATCH, DELETE"],
    allowHeaders: '*'
}

require('./db/db')

const userRouter = require('./routers/userRouter')
const teamRouter = require('./routers/teamRouter')
const meetRouter = require('./routers/meetRouter')
const freeSlotRouter = require('./routers/freeSlotRouter')
const linkRouter = require('./routers/linkRouter')

app.use(express.urlencoded({ limit: '50mb', extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(cors(corsOptions))

app.use('/user', userRouter)
app.use('/team', teamRouter)
app.use('/meet', meetRouter)
app.use('/timetable', freeSlotRouter)
app.use('/link', linkRouter)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../index.html"))
})
app.get('*', (req,res)=>{
    res.redirect('/')
  })
module.exports = app