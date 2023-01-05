const db = require("../db/db");
const Team = db.teams;
const User = db.users;
const { NotFoundError,
        BadRequestError,
        InvalidData} = require("../utilities/error");
const errorHandler = require("./errorHandler");

//middleware functions
//add team by link //check
const addTeamByLink = async (req, res, next) => {
    try {
      if(!req.body.team_name){
        return errorHandler(new InvalidData("Team Name Not Provided"), req, res)
      }
      if(!req.body.regno){
        return errorHandler(new InvalidData("Members Not Provided"), req, res)
      }
      const team = await Team.create(req.body);
      const member = await team.addUsers(req.body.regno);
      res.status(201);
      next();
    } catch (error) {
      errorHandler(new BadRequestError(), req, res);
      console.error(error.message);
    }
  };
  // get all teams
  const getAllTeams = async (req, res, next) => {
    try {
      let email = req.body.email
      if(!email || email == undefined){
        return errorHandler(new InvalidData("Email Not Provided"), req, res)
      }
      const user = await User.findOne({
        where: { email: email },
      });
      if(!user){
        return errorHandler(new NotFoundError("User Not Found"), req, res) 
      }
      const teams = await user.getTeams();
      if(!teams){
        return errorHandler(new NotFoundError("Team Not Found"), req, res)
      }
      req.body.teams = teams;
      next();
    } catch (error) {
      errorHandler(new BadRequestError(), req, res);
      console.error(error.message);
    }
  };
module.exports = {
    addTeamByLink,
    getAllTeams
}