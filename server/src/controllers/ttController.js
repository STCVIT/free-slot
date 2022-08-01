const express = require('express')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage }).single('image')
const db = require('../../db')
const TT = db.timetables

const addTimetable = async (req, res)=>{
    let info = {
        image: req.file.path,
        timetable: req.body.timetable,
    }
    const tt = await TT.create(info)
    res.status(200).send(TT)
}

const addImage = async (req, res)=>{
    try {
        const tt = await TT.create(req.body) 
        res.status(200).send(tt)
    }
    catch(err){
        console.error(err.message);
    }
}
