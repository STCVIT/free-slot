const db = require('./db/db')
const User = db.users
const Team = db.teams
const Meet = db.meets

Team.hasOne(Meet, { as: "team_id", foreignKey: "id" })
Meet.belongsTo(Team, { as: "", foreignKey: "id" })
User.belongsTo(Team, { as: "admin_id", foreignKey: "reg_no" })
console.log("hi")