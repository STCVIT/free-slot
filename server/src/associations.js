const db = require('./db/db')
const User = db.users
const Team = db.teams
const Meet = db.meets

Team.hasOne(Meet, { foreignKey: "id" })
Team.hasMany(User, { foreignKey: "id" })
User.belongsTo(Team, { as: "admin_id", foreignKey: "reg_no" })