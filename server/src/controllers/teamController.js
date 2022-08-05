const db = require('../db/db')
const Team = db.teams;
const { NotFoundError, BadRequestError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler');

//add team
const addTeam = async (req, res)=>{
    try {
        const team = await Team.create(req.body);
        res.status(201).send(team)
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
            return errorHandler(new NotFounError, req, res)
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
            return errorHandler(new NotFounError, req, res)
        }
        res.status(201).send(team)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

// get all teams
const getAllTeams = async (req, res)=>{
    let teams = []
    try {
        const adminId  = req.params.regno
        if(adminId != null){
            teams = await Team.find({
                where: {admin_id: adminId}
            })
        } else {
            return errorHandler(new NotFoundError, req, res)
        }
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
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
    updateTeam,
    deleteTeam
}