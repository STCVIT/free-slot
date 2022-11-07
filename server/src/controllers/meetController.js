const db = require('../db/db')
const Meet = db.meets;
const { NotFoundError, BadRequestError } = require('../utilities/error')
const errorHandler = require('../middleware/errorHandler');
const Team = db.teams
const User = db.users
//Adding Meet
const addMeet = async (req, res)=>{
    try {
        const meet = await Meet.create(req.body);
        const team = Team.findOne({
            where: {team_id: req.body.team_id}
        })
        await team.addMeet(meet)
        res.status(201).send(meet)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

//Get meet
const getMeet = async (req, res)=>{
    try {
        const meet = await Meet.findOne({
            where: {meet_id: req.params.meet_id}
        })
        if(!meet){
            return errorHandler(new NotFoundError, req, res)
        }
        res.status(201).send(meet)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
}

//Get meets...needs to be fixed
// const getMeets = async (req, res)=>{
//     try {
//         const meets = await Meet.findAll({
//             where: {meet_id: req.params.meet_id}
//         }).sort()
//         if(!meets){
//             return errorHandler(new NotFoundError, req, res)
//         }
//         res.status(201).send(meets)
//     } catch (error) {
//         errorHandler(new BadRequestError, req, res)
//         console.error(error.message)
//     }
// }
const getMeets = async (req, res)=>{
    try {
        const regno = User.findOne({
            where: {email: req.body.email},
            attributes: ['reg_no']
        })
        const teams = regno.getTeams()//doubt
        teams.forEach((team)=>{
            team.getMeets()
        })
        res.status(200).send(teams)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message)
    }
    
}

//upadte meet
const updateMeet = async (req, res)=>{
    const updates = Object.keys(req.body)
    try{
        let id = req.body.meet_id
        if(!id || id == undefined){
            return res.status(418).send("Meet does not exist")
        }
        const meet = await Meet.findOne({
            where: {meet_id: id}
         })
        if(!meet) {
            return errorHandler(new NotFoundError, req, res)
        }
        updates.forEach((update)=> (meet[update] = req.body[update]));
        await meet.save()
        res.status(200).send(meet)
    }
    catch(error){
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}

//delete meet
const deleteMeet = async (req, res)=>{
    try {
        let id = req.params.meet_id
        if(!id || id == undefined){
            return res.status(418).send("Meet does not exist")
        }
        const meet = await Meet.findOne({
            where: {meet_id: id}
         })
         if(!meet) {
            return errorHandler(new NotFoundError, req, res)
        }
        await meet.destroy()
        res.status(200).send(meet)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
const getAllMeets = async (req, res)=>{
    try {
        // var teams = req.body.teams
        // await teams.forEach(async (team, index, teams)=>{
        //     teams[index] = await teams[index].getMeets()
        //     res.send(teams)
        // })
        let results = []
        const teams = req.body.teams
        for(const team of teams){
            const meets = await team.getMeets()
            for( const meet of meets){
                results.push(meet)
            }
        }
        return res.send(results)
    } catch (error) {
        errorHandler(new BadRequestError, req, res)
        console.error(error.message);
    }
}
module.exports = {
    addMeet,
    getMeet,
    getMeets,
    getAllMeets,
    updateMeet,
    deleteMeet
}