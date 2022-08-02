module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('user', {
        reg_no: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                is: /([0-9]{2})([A-Z]{3})([0-9]{4})/,
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
                is: /^([a-z|\.]+)([0-9]{4})([a-z]?)(@vitstudent.ac.in)/,
              }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.BLOB('long'),
            allowNull: true
        }
    }, {
        createdAt: false,
        updatedAt: false
    });
    return User
}