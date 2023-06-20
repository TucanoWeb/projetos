const Sequelize = require('sequelize')
const db = require('../db')

const Produtos = db.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: true,
    }


})

// Descomentar apenas se houver necessidade de nova sincronização
// Produtos.sync();

module.exports = Produtos