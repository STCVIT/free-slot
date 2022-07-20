module.exports = (sequelize, DataTypes)=>{
    const Meet = sequelize.define('meet', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        timings: {
            type: DataTypes.JSON,
            allowNull: false
        }

    }, {
        createdAt: false,
        updatedAt: false
    });
    return Meet
}