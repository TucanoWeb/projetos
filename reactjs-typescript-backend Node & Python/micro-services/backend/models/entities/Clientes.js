const Sequelize = require('sequelize')
const db = require('../db')

const Clientes = db.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: true,
    }

})

// Descomentar apenas se houver necessidade de nova sincronização
//Clientes.sync();

module.exports = Clientes