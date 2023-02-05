const router = require("express").Router();
const {
  addTeam,
  getTeamById,
  getTeamByName,
  updateTeam,
  deleteTeam,
  getUserTeams,
  getTeamMembers
} = require("../controllers/teamController");
const { checkUser } = require("../middleware/auth"); 

router.post("/create", addTeam);
router.get("/:team_name", checkUser, getTeamByName);
router.get("/teamMembers/:team_id", checkUser, getTeamMembers);
router.post("/getUserTeams", checkUser, getUserTeams);
router.patch("/updateTeam/:team_id", checkUser, updateTeam);
router.delete("/deleteTeam/:team_id", checkUser, deleteTeam);
module.exports = router;

//unused 
// router.post("/getAllTeams", checkUser, getAllTeams);
//router.post("/getTeam", checkUser, getTeamByName);