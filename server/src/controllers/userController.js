const db = require('../db/db')
const User = db.users;
const { NotFounError, BadRequestError } = require('../utilities/error')
const errorhandler = require('../middleware/errorHandler')

// Adding User
const addUser = async (req, res)=>{
    try {
        let info = {
        image: req.file.path,
        name: req.body.name,
        regno: req.body.regno,
        email: req.body.email,
        password: req.body.password,
    }
    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user);
    }
    catch (error){
        errorhandler(new BadRequestError)
        console.error(error.message);
    }
}

// Get one User
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
            return errorhandler(new NotFounError, req, res)
        }
        res.status(200).send(user)
    }
    catch(error){
        errorhandler(new BadRequestError)
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
            return errorhandler(new NotFounError, req, res)
        }
        res.status(200).send(users)
    }
    catch(error){
        errorhandler(new BadRequestError)
        console.error(error.message);
    }
}

// update user
const updateUser = async (req, res)=>{
    const updates = Object.keys(req.body)
    try{
        let regno = req.params.regno
        if(!regno || regno == undefined){
            return res.status(418).send("Invalid registration number")
        }
        const user = await User.findOne({
            where: {reg_no: regno}
         })
        if(!user) {
            return errorhandler(new NotFounError, req, res)
        }
        updates.forEach((update)=> (user[update] = req.body[update]));
        await user.save()
        res.status(200).send(user)
    }
    catch(error){
        errorhandler(new BadRequestError)
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
            return errorhandler(new NotFounError, req, res)
        }
        await user.destroy()
        res.status(200).send(user)
    } catch (error) {
        errorhandler(new BadRequestError)
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
