const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/database.sqlite'
})

sequelize.authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso')
    }).catch((erro) => {
        console.log('Erro na conexão: ', erro)
    })

module.exports = sequelize;