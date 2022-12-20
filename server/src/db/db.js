const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()
const config = require("./config")[process.env.NODE_ENV || "development"];
console.log("HELLO "+process.env.DB_PORT)
// const path = require('path')
// require('dotenv').config({path: path.resolve(__dirname, '../../')})
//for locally running
//const sequelize = new Sequelize(config.postgres);
// for hosting

// const sequelize = new Sequelize(config.production, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });
const sequelize = new Sequelize(config.postgres);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected successfully to " + process.env.PGDATABASE);
  })
  .catch(() => {
    console.log("Couldn't connect to database");
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("../models/user.model")(sequelize, DataTypes);
db.teams = require("../models/team.model")(sequelize, DataTypes);
db.meets = require("../models/meetings.model")(sequelize, DataTypes);
db.teams.hasMany(db.meets, { foreignKey: "team_id" });
db.meets.belongsTo(db.teams, { foreignKey: "meet_id" });
db.teams.belongsToMany(db.users, { through: "userteams" });
db.users.belongsToMany(db.teams, { through: "userteams" });
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database, tables & associations created");
  })
  .catch((err) => {
    console.error(err.message);
  });
module.exports = db;
