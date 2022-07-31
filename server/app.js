const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(cors)
app.use(express.json());

require('./db')
require('./associations')
const userRouter = require('./src/routers/userRouter')
app.use('/user', userRouter)

const ttRouter = require('./src/routers/timetableRouter')
app.use('/tt', ttRouter)

const meetRouter = require('./src/routers/meetRouter')
app.use('/meet', meetRouter)

const api = require('./api')
app.use('/api', api)

app.get('/', (req, res)=>{
    res.send("This is working")
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

