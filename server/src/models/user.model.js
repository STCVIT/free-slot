module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('user', {
        reg_no: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                is: /([0-9]{2})([A-Z]{3})([0-9]{4})/, //get this checked
              }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^([a-z|\.]+)([0-9]{4})([a-z]?)(@vitstudent.ac.in)/, //get these validators checked
              }
        },
        password: {
            type: DataTypes.STRING, //check this datatype
            allowNull: true,
        },
        timetable: {
            type: DataTypes.JSON, // or DataTypes.ARRAY(DataTypes.JSON)
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

//use hooks for encrypting password before storing