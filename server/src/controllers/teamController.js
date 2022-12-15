const db = require("../db/db");
const Team = db.teams;
const User = db.users;
const { NotFoundError, BadRequestError } = require("../utilities/error");
const errorHandler = require("../middleware/errorHandler");
const userModel = require("../models/user.model");

//add team
const addTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    const members = await team.addUsers(req.body.members);
    res.status(201).send(team);
    // res.status(201);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
//add team by link
const addTeamByLink = async (req, res, next) => {
  try {
    const team = await Team.create(req.body);
    const member = await team.addUsers(req.body.regno);
    //res.status(201).send(team);
    res.status(201);
    next();
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//get team by id
const getTeamById = async (req, res) => {
  try {
    const team = await Team.findOne({
      where: { id: req.params.team_id },
    });
    if (!team) {
      return errorHandler(new NotFoundError(), req, res);
    }
    res.status(200).send(team);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//get team by name
const getTeamByName = async (req, res) => {
  try {
    const team = await Team.findOne({
      where: { name: req.params.name },
    });
    if (!team) {
      return errorHandler(new NotFoundError(), req, res);
    }
    res.status(200).send(team);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

// get all teams
const getAllTeams = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    const teams = await user.getTeams();
    req.body.teams = teams;
    next();
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

const getUserTeams = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    const teams = await user.getTeams();
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
    // console.log(teams);
    res.status(200).send([teams, finalObj]);

    //console.log(finalObj);
    // console.log(finalArr);
    // console.log(teams);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//get team members
const getTeamMembers = async (req, res) => {
  try {
    const team = await Team.findOne({
      where: { team_id: req.body.team_id },
    });
    const users = await team.getUsers();
    res.status(200).send(users);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
//update team
const updateTeam = async (req, res) => {
  //const updates = Object.keys(req.body);
  try {
    let id = req.params.team_id;
    if (!id || id == undefined) {
      return res.status(418).send("Team does not exist");
    }
    const team = await Team.findOne({
      where: { id: id },
    });
    if (!team) {
      return errorHandler(new NotFoundError(), req, res);
    }
    //updates.forEach((update) => (team[update] = req.body[update]));
    //await team.save();
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
      return res.status(418).send("Team does not exist");
    }
    const team = await Team.findOne({
      where: { id: id },
    });
    if (!team) {
      return errorHandler(new NotFoundError(), req, res);
    }
    await team.destroy();
    //res.status(200).send(team);
    res.status(200);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

module.exports = {
  addTeam,
  addTeamByLink,
  getTeamById,
  getTeamByName,
  getAllTeams,
  getTeamMembers,
  updateTeam,
  deleteTeam,
  getUserTeams,
};
