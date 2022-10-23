module.exports = (sequelize, DataTypes)=>{
    const Team = sequelize.define('team', {
        team_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        team_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }, {
        createdAt: true,
        updatedAt: true
    })
    return Team
}