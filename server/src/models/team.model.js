module.exports = (sequelize, DataTypes)=>{
    const Team = sequelize.define('team', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false
    })
    return Team
}