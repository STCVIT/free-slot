const db = require("../db/db");
const User = db.users;
const { UserNotFoundError,
        BadRequestError,
        DuplicateUser,
        InvalidEmail,
        InvalidRegNo } = require("../utilities/error");
const errorHandler = require("../middleware/errorHandler");

// Adding User in database
const addUserInDb = async (req, res, next) => {
  try {
    let info = {
      reg_no: req.body.regno,
      name: req.body.name,
      email: req.body.email,
    };
    const user = await User.create(info);
    //res.status(200).send(user)
    res.sendStatus(201);
  } catch (error) {
    if(error.message=="Validation error"){
      errorHandler(new DuplicateUser(), req, res);
      console.error(error.message);
    }else{
      errorHandler(new BadRequestError(), req, res);
      console.error(error.message);
    }
  }
};

// Get one user
const getUser = async (req, res) => {
  try {
    let regno = req.body.regno;
    if (!regno || regno == undefined) {
      return errorHandler(new InvalidRegNo(), req, res);
    }
    const user = await User.findOne({
      where: { reg_no: regno },
    });
    if (!user) {
      return errorHandler(new UserNotFoundError(), req, res);
    }
    res.status(200).send(user);
  } catch (error) {
    errorHandler(new BadRequestError());
    console.error(error.message);
  }
};
const getUserByEmail = async (req, res) => {
  try {
    let email = req.body.email;
    if (!email || email == undefined) {
      return errorHandler(new InvalidEmail(), req, res);
    }
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      return errorHandler(new UserNotFoundError(), req, res);
    }
    res.status(200).send(user);
  } catch (error) {
    errorHandler(new BadRequestError());
    console.error(error.message);
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: { meet_id: req.body.meet_id },
    }).sort();
    if (!users) {
      return errorHandler(new UserNotFoundError(), req, res);
    }
    res.status(200).send(users);
  } catch (error) {
    errorHandler(new BadRequestError());
    console.error(error.message);
  }
};

// update user
const updateUser = async (req, res) => {
  // const updates = Object.keys(req.body);
  try {
    let email = req.body.email;
    if (!email || email == undefined) {
      return errorHandler(new InvalidEmail(), req, res);
    }
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      return errorHandler(new UserNotFoundError(), req, res);
    }
    // updates.forEach((update) => (user[update] = req.body[update]));
    user["timetable"] = req.body["timetable"];
    await user.save();
    //res.status(200).send(user)
    res.sendStatus(200);
  } catch (error) {
    errorHandler(new BadRequestError(), req, res);
    console.error(error.message);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    let email = req.params.email;
    if (!email || email == undefined) {
      return errorHandler(new InvalidEmail(), req, res);
    }
    const user = await User.findOne({
      where: { email: email }
    });
    if (!user) {
      return errorHandler(new UserNotFoundError(), req, res);
    }
    await user.destroy();
    //res.status(200).send(user)
    res.sendStatus(200);
  } catch (error) {
    errorHandler(new BadRequestError());
    console.error(error.message);
  }
};
const getUserReg = async (req, res, next) => {
  try {
    let email = req.body.email;
    if (!email || email == undefined) {
      return errorHandler(new InvalidEmail(), req, res);
    }
    const regno = await User.findOne({
      where: { email: email },
      attributes: ["reg_no"],
    });
    if(!regno){
      return errorHandler(new UserNotFoundError(), req, res);
    }
    req.body.regno = regno;
    next();
  } catch (error) {
    errorHandler(new BadRequestError());
    console.error(error.message);
  }
};
const checkUserByReg = async (req, res, next) => {
  try {
    const reg = req.body.reg_no;
    if (!reg || reg == undefined) {
      return errorHandler(new InvalidRegNo(), req, res);
    }
    const regno = await User.findOne({
      where: { reg_no: reg },
    });
    if (!regno) {
      res.send(false);
    } else {
      console.log(regno)
      res.send(true);
    }
  } catch (error) {
    errorHandler(new BadRequestError());
    console.error(error.message);
  }
};
const getUserName = async (req, res, next) => {
  try {
    let email = req.body.email;
    if (!email || email == undefined) {
      return errorHandler(new InvalidEmail(), req, res);
    }
    const name = await User.findOne({
      where: { email: req.body.email },
      attributes: ["name"],
    });
    if(!name){
      return errorHandler(new UserNotFoundError(), req, res);
    }
    req.body.admin = name.name;
    next();
  } catch (error) {
    errorHandler(new BadRequestError());
    console.error(error.message);
  }
};
module.exports = {
  addUserInDb,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserReg,
  getUserName,
  getUserByEmail,
  checkUserByReg,
};
