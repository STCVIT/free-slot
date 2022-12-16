const db = require("../db/db");
const Meet = db.meets;
const { NotFoundError, BadRequestError, TeamNotFoundError, MeetNotFoundError, InvalidTeamId, InvalidEmail, UserNotFoundError, InvalidMeetId } = require("../utilities/error");
const errorHandler = require("../middleware/errorHandler");
const Team = db.teams;
const User = db.users;
//Adding Meet
const addMeet = async (req, res) => {
  try {
    let teamId = req.body.team_id;
    if(!teamId || teamId == undefined){
      return errorHandler(new InvalidTeamId(), req, res)
    }
    const meet = await Meet.create(req.body);
    const team = await Team.findOne({
      where: { team_id: req.body.team_id },
    });
    if(!team){
      return errorHandler(new TeamNotFoundError(), req, res)
    }
    await team.addMeet(meet);
    //res.status(201).send(meet);
    res.sendStatus(201);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
//Get meet
const getMeet = async (req, res) => {
  try {
    const meet = await Meet.findOne({
      where: { meet_id: req.params.meet_id },
    });
    if (!meet) {
      return errorHandler(new NotFoundError(), req, res);
    }
    res.status(200).send(meet);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
const getMeets = async (req, res) => {
  try {
    let email = req.body.email
    if(!email || email == undefined){
      return errorHandler(new InvalidEmail(), req, res)
    }
    const regno = await User.findOne({
      where: { email: email },
      attributes: ["reg_no"],
    });
    if(!regno){
      return errorHandler(new UserNotFoundError(), req, res)
    }
    const teams = await regno.getTeams(); //doubt
    if(!teams){
      return errorHandler(new TeamNotFoundError(), req, res)
    }
    teams.forEach(async (team) => {
      await team.getMeets();
    });
    res.status(200).send(teams);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
const getAllUpcomingMeets = async (req, res) => {
  try {
    let results = [];
    const teams = req.body.teams;
    for (const team of teams) {
      const teamName = team.team_name;
      const meets = await team.getMeets();
      for (const meet of meets) {
        if (meet.status === "upcoming") {
          meet["dataValues"]["team_name"] = teamName;
          results.push(meet);
        }
      }
    }
    res.status(200).send(results);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
const getAllPastMeets = async (req, res) => {
  try {
    let results = [];
    const teams = req.body.teams;
    for (const team of teams) {
      const meets = await team.getMeets();
      for (const meet of meets) {
        if (meet.status === "past") results.push(meet);
      }
    }
    res.status(200).send(results);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
const getAllCancelledMeets = async (req, res) => {
  try {
    let results = [];
    const teams = req.body.teams;
    for (const team of teams) {
      const meets = await team.getMeets();
      for (const meet of meets) {
        if (meet.status === "cancelled") results.push(meet);
      }
    }
    res.status(200).send(results);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
//upadte meet
const updateMeetStatus = async (req, res) => {
  try {
    let id = req.body.meet_id;
    if (!id || id == undefined) {
      return errorHandler(new InvalidMeetId(), req, res)
    }
    const meet = await Meet.findOne({
      where: { meet_id: id },
    });
    if (!meet) {
      return errorHandler(new MeetNotFoundError(), req, res);
    }
    meet["status"] = req.body.status;
    await meet.save();
    // res.status(200).send(meet);
    res.sendStatus(200);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//delete meet
const deleteMeet = async (req, res) => {
  try {
    let id = req.params.meet_id;
    if (!id || id == undefined) {
      return errorHandler(new InvalidMeetId(), req, res)
    }
    const meet = await Meet.findOne({
      where: { meet_id: id },
    });
    if (!meet) {
      return errorHandler(new MeetNotFoundError(), req, res);
    }
    await meet.destroy();
    // res.status(200).send(meet);
    res.sendStatus(200);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
const getAllMeets = async (req, res) => {
  try {
    let results = [];
    const teams = req.body.teams;
    for (const team of teams) {
      const meets = await team.getMeets();
      for (const meet of meets) {
        results.push(meet);
      }
    }
    return res.status(200).send(results);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};
module.exports = {
  addMeet,
  getMeet,
  getMeets,
  getAllMeets,
  getAllUpcomingMeets,
  getAllPastMeets,
  getAllCancelledMeets,
  updateMeetStatus,
  deleteMeet,
};
