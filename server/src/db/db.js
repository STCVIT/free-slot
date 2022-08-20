const { Sequelize, DataTypes } = require('sequelize')
const config = require('./config')[process.env.NODE_ENV || 'development']
const sequelize = new Sequelize(config.postgres.options)

sequelize.authenticate()
    .then(()=>{
        console.log('Connected successfully')
    })
    .catch(()=>{
        console.log('Couldn\'t connect to database')
    })
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users=require('../models/user.model')(sequelize, DataTypes)
db.teams=require('../models/team.model')(sequelize, DataTypes)
db.meets=require('../models/meetings.model')(sequelize, DataTypes)
//db.user_teams=require('../models/userTeam.model')(sequelize, DataTypes)
sequelize.sync({ force: false })
    .then(()=>{
        console.log("Database & tables created")
    })
    // .then(()=>{
    //     require('../associations')
    // })
    .catch((err)=>{
        console.error(err.message)
    }) 
module.exports = db