const db = require("../db/db");
const User = db.users;
const { NotFoundError,
        BadRequestError,
        InvalidData} = require("../utilities/error");
const errorHandler = require("./errorHandler");
//middleware functions
const getUserReg = async (req, res, next) => {
    try {
      let email = req.body.email;
      if (!email || email == undefined) {
        return errorHandler(new InvalidData("Email Not Provided"), req, res);
      }
      const regno = await User.findOne({
        where: { email: email },
        attributes: ["reg_no"],
      });
      if(!regno){
        return errorHandler(new NotFoundError("User Not Found"), req, res);
      }
      req.body.regno = regno;
      next();
    } catch (error) {
      errorHandler(new BadRequestError());
      console.error(error.message);
    }
  };
  const getUserName = async (req, res, next) => {
    try {
      let email = req.body.email;
      if (!email || email == undefined) {
        return errorHandler(new InvalidData("Email Not Provided"), req, res);
      }
      const name = await User.findOne({
        where: { email: req.body.email },
        attributes: ["name"],
      });
      if(!name){
        return errorHandler(new NotFoundError("User Not Found"), req, res);
      }
      req.body.admin = name.name;
      next();
    } catch (error) {
      errorHandler(new BadRequestError());
      console.error(error.message);
    }
  };
  module.exports = {
    getUserReg,
    getUserName
  }