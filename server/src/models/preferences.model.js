module.exports = (sequelize, DataTypes)=>{
    const Pref = sequelize.define('preference', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        notifications: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        createdAt: false,
        updatedAt: false
    });
    return Pref
}