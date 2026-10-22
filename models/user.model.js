const { DataTypes } = require('sequelize')
const db = require('../utils/db')

const user = db.define("users", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    }, username: {
        type: DataTypes.STRING,
        allowNull: false
    }, password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = user
