module.exports = (sequelize, DataTypes)=>{
    const Meet = sequelize.define('meet', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //check about this link or location thing
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        end_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        }
    }, {
        createdAt: false,
        updatedAt: false
    });
    return Meet
}