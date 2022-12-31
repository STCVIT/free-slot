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
router.post("/getUser", getUser);
router.post("/getUserByEmail", getUserByEmail);
router.post("/checkUserByReg", checkUserByReg);
router.patch("/updateUser", updateUser);
router.delete("/deleteUser/:email", deleteUser);

module.exports = router;
