const { sequelize } = require('./db/db')
const db = require('./db/db')
const Team = db.teams
const User = db.users
const Meet = db.meets
//const User_Team = db.user_teams

Team.hasMany(Meet, { foreignKey: "id" })
Meet.belongsTo(Team)
Team.belongsToMany(User, {through: 'userteams'})
User.belongsToMany(Team, {through: 'userteams'})

sequelize.sync({alter: true})
    .then(()=>{
        console.log("Associations created")
    })
    .catch((err)=>{
        console.error(err)
    })