const db = require('../db/db')
const User = db.users;
const { NotFounError, BadRequestError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler')

// Adding User
const addUser = async (req, res)=>{
    try {
        let info = {
        reg_no: req.body.reg_no,
        name: req.body.name,
        email: req.body.email,
    }
    const user = await User.create(info)
    res.statusCode(200).send(user)
    console.log(user);
    }
    catch (error){
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}

// Get one user
const getUser = async (req, res)=>{
    try{
        let regno = req.params.regno;
        if(!regno || regno==undefined){
            return res.status(418).send("Invalid registration number")
        }
        const user = await User.findOne({
            where: {reg_no: regno}
         })
        if(!user) {
            return errorHandler(new NotFounError, req, res)
        }
        res.status(200).send(user)
    }
    catch(error){
        errorHandler(new BadRequestError)
        console.error(error.message);
    }
}

// Get all users
const getUsers = async (req, res)=>{
    try{
        const users = await User.findAll({
            where: {meet_id: req.params.meet_id}
        }).sort()
        if(!users) {
            return errorHandler(new NotFounError, req, res)
        }
        res.status(200).send(users)
    }
    catch(error){
        errorHandler(new BadRequestError)
        console.error(error.message);
    }
}

// update user
const updateUser = async (req, res)=>{
    const updates = new Object.keys(req.body) //new keyword or not?
    try{
        let regno = req.params.regno
        if(!regno || regno == undefined){
            return res.status(418).send("Invalid registration number")
        }
        const user = await User.findOne({
            where: {reg_no: regno}
         })
        if(!user) {
            return errorHandler(new NotFounError, req, res)
        }
        updates.forEach((update)=> (user[update] = req.body[update]));
        await user.save()
        res.status(200).send(user)
    }
    catch(error){
        errorHandler(new BadRequestError)
        console.error(error.message);
    }
}

//delete user
const deleteUser = async (req, res)=>{
    try {
        let regno =req.params.regno
        if(!regno || regno == undefined){
            return res.status(418).send("Invalid registration number")
        }
        const user = await User.findOne({
            where: {reg_no: regno}
         })
         if(!user) {
            return errorHandler(new NotFounError, req, res)
        }
        await user.destroy()
        res.status(200).send(user)
    } catch (error) {
        errorHandler(new BadRequestError)
        console.error(error.message);
    }
}

module.exports = { 
    addUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}
