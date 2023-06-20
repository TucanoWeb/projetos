const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json)
app.use(cors())

const Vendas = require('../../models/entities/Vendas')
const sequelize = require('../../models/db')

const VendasRoute = (app) => {

    app.get('/vendas', async (req, res) => {

        await sequelize.query(`SELECT vendaProdutoClientes.id, vendaProdutoClientes.createdAt, vendaProdutoClientes.id_clientes, 
        vendaProdutoClientes.id_produtos, vendaProdutoClientes.spent, clientes.name, produtos.product
        FROM vendaProdutoClientes JOIN clientes ON vendaProdutoClientes.id_clientes = clientes.id
        JOIN produtos ON vendaProdutoClientes.id_produtos = produtos.id`)

            .then((vendas) => {
                return res.json({
                    error: false,
                    mensagem: 'Listagem de vendas Realizada',
                    vendas
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensagem: 'Listagem de vendas não realizada'
                })
            })
    })


    app.post('/vendas-create', async (req, res) => {

        await Vendas.create(req.body)
            .then(() => {
                return res.json({
                    error: false,
                    mensagem: 'Venda cadastrada'
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensagem: error.errors[0]['message']
                })
            })
    })


    app.put('/vendas-update/:id', async (req, res) => {
        await Vendas.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.json({
                    error: false,
                    mensagem: 'Sucesso'
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensagem: error.errors[0]['message']
                })
            })

    })



    app.delete('/vendas-delete/:id', async (req, res) => {
        await Vendas.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.json({
                    error: false,
                    mensagem: 'Sucesso'
                })
            })
            .catch(() => {
                return res.json({
                    error: true,
                    mensagem: 'Operação não realizada'
                })
            })
    })


}


module.exports = VendasRoute