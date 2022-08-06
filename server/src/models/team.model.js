module.exports = (sequelize, DataTypes)=>{
    const Team = sequelize.define('team', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        members: {
            type: DataTypes.ARRAY(DataTypes.STRING), //check once
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false
    })
    return Team
}