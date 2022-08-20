module.exports = (sequelize, DataTypes)=>{
    const Team = sequelize.define('team', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        createdAt: false,
        updatedAt: false
    })
    return Team
}