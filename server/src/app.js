require('dotenv').config()
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./db/index')
require('./associations')
const userRouter = require('./routers/userRouter')
app.use('/user', userRouter)

const ttRouter = require('./routers/timetableRouter')
app.use('/tt', ttRouter)

const meetRouter = require('./routers/meetRouter')
app.use('/meet', meetRouter)

app.get('/', (req, res)=>{
    res.send("This is working")
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
