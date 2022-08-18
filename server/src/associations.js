const db = require('./db/db')
const Team = db.teams
const User = db.users
const Meet = db.meets

Team.hasOne(Meet, { as: "team_id", foreignKey: "id" })
Team.belongsToMany(User, {through: "User_Team"})
User.belongsToMany(Team, {through: "User_Team"})
Meet.belongsTo(Team, { as: "", foreignKey: "id" })
//User.belongsTo(Team, { as: "admin_id", foreignKey: "reg_no" })