const Sequelize = require('sequelize')
const db = require('../db')

const VendaProdutoCliente = db.define('vendaProdutoCliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    spent: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    // As colunas abaixo foram adicionadas primeiro através do arquivo RelationShips para depois serem inseridas aqui como modelo de consulto ao banco de dados. 
    id_clientes: {
        type: Sequelize.INTEGER
    },
    id_produtos: {
        type: Sequelize.INTEGER
    }

})

// Descomentar apenas se houver necessidade de nova sincronização
// VendaProdutoCliente.sync();

module.exports = VendaProdutoCliente