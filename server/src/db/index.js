const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/index')[process.env.NODE_ENV || 'development']
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
db.timetables=require('../models/timetable.model')(sequelize, DataTypes)
db.meets=require('../models/meetings.model')(sequelize, DataTypes)
db.prefs=require('../models/preferences.model')(sequelize, DataTypes)
sequelize.sync({ force: false })

module.exports = db