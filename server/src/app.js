const express = require('express');
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../../.env')})
const cors = require('cors');
const app = express();

require('./db/db')
require('./associations')

const userRouter = require('./routers/userRouter')
const ttRouter = require('./routers/timetableRouter')
const meetRouter = require('./routers/meetRouter')

app.use(express.urlencoded({ extended: true}));
app.use(cors)
app.use(express.json());

app.use('/user', userRouter)
app.use('/tt', ttRouter)
app.use('/meet', meetRouter)

module.exports = app