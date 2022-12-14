const router = require("express").Router();
const {
  addUserInDb,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByEmail,
  checkUserByReg,
} = require("../controllers/userController");

const { checkUser } = require("../middleware/auth");

router.post("/create", addUserInDb);
router.post("/getUser", checkUser, getUser);
//router.get('/getUsers/:meet_id', getUsers)
router.post("/getUserByEmail", getUserByEmail);
router.post("/checkUserByReg", checkUserByReg);
router.patch("/updateUser", checkUser, updateUser);
//router.delete('/deleteUser',checkUser, deleteUser, sessionLogout)
router.delete("/deleteUser", deleteUser);
//router.post('/sessionlogin', sessionLogin)
//router.post('/sessionlogout', sessionLogout)

module.exports = router;
