(async () => {
    const database = require('../db');
    const Vendas = require('./Vendas');
    const Produtos = require('./Produtos')
    const Clientes = require('./Clientes');

    try {
        Vendas.belongsTo(Clientes, {
            constraint: true,
            foreignKey: 'id_clientes'
        })

        Vendas.belongsTo(Produtos, {
            constraint: true,
            foreignKey: 'id_produtos'
        })

        const resultado = await database.sync({ force: true });
        //console.log(resultado);

    } catch (error) {
        console.log(error);
    }
})();