module.exports = (sequelize, DataTypes)=>{
    const TT = sequelize.define('timetable', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tt: {
            type: DataTypes.JSON,
            allowNull: true
        }
    }, {
        createdAt: false,
        updatedAt: false
    });
    return TT
}