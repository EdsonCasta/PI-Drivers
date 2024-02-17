const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Teams', {
        ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}