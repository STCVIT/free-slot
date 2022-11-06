//this file is supposed to be deleted 

// const { sequelize } = require('./db/db')
// const db = require('./db/db')
// const Team = db.teams
// const User = db.users
// const Meet = db.meets

// Team.hasMany(Meet, { foreignKey: "team_id" })
// Meet.belongsTo(Team, {foreignKey: "meet_id"})
// Team.belongsToMany(User, {through: 'userteams'})
// User.belongsToMany(Team, {through: 'userteams'})
// module.exports = db
// sequelize.sync({alter: true})
//     .then(()=>{
//         console.log("Associations created")
//     })
//     .catch((err)=>{
//         console.error(err)
//     })