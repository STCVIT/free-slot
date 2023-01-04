const router = require("express").Router();
const {
  addUserInDb,
  getUser,
  updateUser,
  deleteUser,
  getUserByEmail,
  checkUserByReg,
} = require("../controllers/userController");

const { checkUser } = require("../middleware/auth");

router.post("/create", addUserInDb);
router.post("/getUser", checkUser, getUser);
router.post("/getUserByEmail", checkUser, getUserByEmail);
router.post("/checkUserByReg", checkUser, checkUserByReg);
router.patch("/updateUser", checkUser, updateUser);
router.delete("/deleteUser/:email", checkUser, deleteUser);

module.exports = router;