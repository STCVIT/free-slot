module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('user', {
        reg_no: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                is: /([0-9]{2})([A-Z]{3})([0-9]{4})/,
              },
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^([a-z|\.]+)([0-9]{4})([a-z]?)(@vitstudent.ac.in)/,
              }
        },
        timetable: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: true
        },
        date_format: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time_format: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        createdAt: false,
        updatedAt: false
    });
    return User
}