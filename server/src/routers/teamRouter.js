const router = require("express").Router();
const {
  addTeam,
  getTeamById,
  getTeamByName,
  getAllTeams,
  updateTeam,
  deleteTeam,
  getUserTeams,
} = require("../controllers/teamController");
const { checkUser } = require("../middleware/auth"); 

router.post("/create", checkUser, addTeam);
router.get("/getTeam", checkUser, getTeamById);
router.post("/getTeam", checkUser, getTeamByName);
router.post("/getAllTeams", checkUser, getAllTeams);
router.patch("/updateTeam/:team_id", checkUser, updateTeam);
router.delete("/deleteTeam/:team_id", checkUser, deleteTeam);
router.post("/getUserTeams", checkUser, getUserTeams);
module.exports = router;

//unused 
//router.post("/getTeamMembers", checkUser, getTeamMembers); //to query in responses of link feature