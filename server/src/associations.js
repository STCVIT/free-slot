const db = require('./db/index')
const User = db.users
const Timetable = db.timetables
const Preferences = db.prefs
const Meets = db.meets

User.belongsTo(Timetable, { foreignKey: "id" })
User.belongsTo(Preferences, { foreignKey: "id" })
User.belongsToMany(Meets, {through: "userMeet" })
Meets.belongsToMany(User, { through: "userMeet" })