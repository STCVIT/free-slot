const db = require('../db/db')
const Team = db.teams;
const User = db.users
const { NotFoundError, BadRequestError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler');
const userModel = require('../models/user.model');

//add team
const addTeam = async (req, res)=>{
    try {
        const team = await Team.create(req.body);
        const members = await team.addUsers(req.body.members)
        res.status(201).send(team)
        console.log("hi")
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

//get team by id
const getTeamById = async (req, res)=>{
    try {
        const team = await Team.findOne({
            where: {id: req.params.team_id}
        })
        if(!team){
            return errorHandler(new NotFoundError, req, res)
        }
        res.status(201).send(team)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

//get team by name
const getTeamByName = async (req, res)=>{
    try {
        const team = await Team.findOne({
            where: {name: req.params.name}
        })
        if(!team){
            return errorHandler(new NotFoundError, req, res)
        }
        res.status(201).send(team)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

// get all teams
const getAllTeams = async (req, res, next)=>{
    try {
        const user = await User.findOne({
            where: {email: req.body.email},
        })
        const teams  = await user.getTeams()
        req.body.teams = teams
        next()
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
//get team members
const getTeamMembers = async (req,res)=>{
    try {
        const team = await Team.findOne({
            where: {team_id: req.body.team_id}
        })
        const users = await team.getUsers()
        res.status(200).send(users)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
//update team
const updateTeam = async (req, res)=>{
    const updates = Object.keys(req.body)
    try{
        let id = req.params.team_id
        if(!id || id == undefined){
            return res.status(418).send("Team does not exist")
        }
        const team = await Team.findOne({
            where: {id: id}
         })
        if(!team) {
            return errorHandler(new NotFoundError, req, res)
        }
        updates.forEach((update)=> (team[update] = req.body[update]));
        await team.save()
        res.status(200).send(team)
    }
    catch(error){
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}

//delete team
const deleteTeam = async (req, res)=>{
    try {
        let id = req.params.team_id
        if(!id || id == undefined){
            return res.status(418).send("Team does not exist")
        }
        const team = await Team.findOne({
            where: {id: id}
         })
         if(!team) {
            return errorHandler(new NotFoundError, req, res)
        }
        await team.destroy()
        res.status(200).send(team)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}

module.exports = {
    addTeam,
    getTeamById,
    getTeamByName,
    getAllTeams,
    getTeamMembers,
    updateTeam,
    deleteTeam
}