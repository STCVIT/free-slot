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
        },
        image: {
            type: DataTypes.BLOB('long'),
            allowNull: true
        }
    }, {
        createdAt: false,
        updatedAt: false
    });
    return TT
}