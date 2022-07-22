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
db.users=require('./src/models/user.model')(sequelize, DataTypes)
db.timetables=require('./src/models/timetable.model')(sequelize, DataTypes)
db.meets=require('./src/models/meetings.model')(sequelize, DataTypes)
db.prefs=require('./src/models/preferences.model')(sequelize, DataTypes)
sequelize.sync({ force: false })
    .then(()=>{
        console.log("Databases & tables created")
    })
    .catch((err)=>{
        console.error(err.message)
    }) 
module.exports = db