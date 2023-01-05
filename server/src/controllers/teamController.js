const db = require("../db/db");
const Team = db.teams;
const User = db.users;
const { NotFoundError,
        BadRequestError,
        InvalidData} = require("../utilities/error");
const errorHandler = require("../middleware/errorHandler");

//add team
const addTeam = async (req, res) => {
  try {
    if(!req.body.team_name){
      return errorHandler(new InvalidData("Team Name Not Provided"), req, res)
    }
    if(!req.body.members){
      return errorHandler(new InvalidData("Members Not Provided"), req, res)
    }
    const team = await Team.create(req.body);
    const members = await team.addUsers(req.body.members);
    res.status(201).send(team);
    // res.status(201);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//get team by id
const getTeamByName = async (req, res) => {
  try {
    let teamName = req.params.team_name
    if(!teamName || teamName==undefined){
      errorHandler(new InvalidData("Team Id Not Provided"), req, res)
    }
    const team = await Team.findOne({
      where: { team_name: teamName },
    });
    if (!team) {
      return errorHandler(new NotFoundError("Team Not Found"), req, res);
    }
    res.status(200).send(team);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//get team members
const getTeamMembers = async (req, res) => {
  try {
    let teamId = req.params.team_id
    if(!teamId || teamId == undefined){
      return errorHandler(new InvalidData("Team Id Not Provided"), req, res)
    }
    const team = await Team.findOne({
      where: { team_id: teamId},
    });
    if(!team){
      return errorHandler(new NotFoundError("Team Not Found"), req, res)
    }
    const users = await team.getUsers();
    if(!users){
      return errorHandler(new NotFoundError("User Not Found"), req, res) 
    }
    res.status(200).send(users);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

// const getUserTeams = async (req, res) => {
//     try {
//       let email = req.body.email
//       if(!email || email == undefined){
//         return errorHandler(new InvalidData("Email Not Provided"), req, res)
//       }
//       const user = await User.findOne({
//         where: { email:email }
//       });
//       if(!user){
//           return errorHandler(new NotFoundError("User Not Found"), req, res) 
//         }
//         const teams = await user.getTeams();
//       if(!teams){
//         return errorHandler(new NotFoundError("Team Not Found"), req, res)
//       }
//       res.status(200).send(teams)
//     }
//     catch(error) {
//       errorHandler(new BadRequestError(), req, res);
//       console.error(error.message);
//     }
// }
//need to check this 
const getUserTeams = async (req, res) => {
  try {
    let email = req.body.email
    if(!email || email == undefined){
      return errorHandler(new InvalidData("Email Not Provided"), req, res)
    }
    const user = await User.findOne({
      where: { email:email }
    });
    if(!user){
        return errorHandler(new NotFoundError("User Not Found"), req, res) 
      }
      const teams = await user.getTeams();
    if(!teams){
      return errorHandler(new NotFoundError("Team Not Found"), req, res)
    }
    const teamsArr = new Set();
    const finalObj = {};
    const individualTeam = [];
    for (const teamItem of teams) {
      const teamId = teamItem.team_id;
      const team = await Team.findOne({
        where: { team_id: teamId },
      });
      const users = await team.getUsers();
      const userArr = [];
      for (const userItem of users) {
        userArr.push(userItem["dataValues"]);
      }
      teamsArr.add(team.team_name);

      userArr.map((user) => {
        const userObj = {
          reg_no: user.reg_no,
          teamName: team.team_name,
          name: user.name,
        };
        individualTeam.push(userObj);
      });
    }
    individualTeam.forEach((user) => {
      if (finalObj[user.teamName]) {
        finalObj[user.teamName].push(user);
      } else {
        finalObj[user.teamName] = [user];
      }
    });
    res.status(200).send([teams, finalObj]);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//update team
const updateTeam = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    let id = req.params.team_id;
    let membersArray = req.body.members;
    if (!id || id == undefined) {
      return errorHandler(new InvalidData("Team Id Not Provided"), req, res)
    }
    if(!membersArray || membersArray==undefined){
      return errorHandler(new InvalidData("Members Not Provided"), req, res)
    }
    const team = await Team.findOne({
      where: { team_id: id },
    });
    if (!team) {
      return errorHandler(new NotFoundError("Team Not Found"), req, res);
    }
    updates.forEach((update) => (team[update] = req.body[update]));
    await team.save();
    const members = await team.addUsers(req.body.members);
    //res.status(200).send(team);
    res.status(200);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//delete team
const deleteTeam = async (req, res) => {
  try {
    let id = req.params.team_id;
    if (!id || id == undefined) {
      return errorHandler(new InvalidData("Team Id Not Provided"), req, res)
    }
    const team = await Team.findOne({
      where: { team_id: id },
    });
    if (!team) {
      return errorHandler(new NotFoundError("Team Not Found"), req, res);
    }
    await team.destroy();
    //res.status(200).send(team);
    res.sendStatus(200);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};


module.exports = {
  addTeam,
  getTeamByName,
  getTeamMembers,
  updateTeam,
  deleteTeam,
  getUserTeams,
};