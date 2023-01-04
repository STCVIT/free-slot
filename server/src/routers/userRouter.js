const router = require("express").Router();
const {
  addUserInDb,
  getUser,
  updateUser,
  deleteUser,
  checkUserByReg,
} = require("../controllers/userController");

const { checkUser } = require("../middleware/auth");

router.post("/create", addUserInDb);
router.get("/getUser", checkUser, getUser);
router.post("/checkUserByReg", checkUser, checkUserByReg);
router.patch("/updateUser", checkUser, updateUser);
router.delete("/deleteUser", checkUser, deleteUser);

module.exports = router;
//unused code
// router.post("/getUserByEmail", checkUser, getUserByEmail);