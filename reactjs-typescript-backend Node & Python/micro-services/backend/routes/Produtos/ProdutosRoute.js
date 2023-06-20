const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json)
app.use(cors())

const Produtos = require('../../models/entities/Produtos')
const sequelize = require('../../models/db')

const ProdutosRoute = (app) => {

    app.get('/produtos', async (req, res) => {

        await Produtos.findAll({
            //order antiga
            // order: [['antiguidade', 'ASC']]
            order: [['product', 'ASC']]
        })
            .then((produtos) => {
                return res.json({
                    error: false,
                    mensagem: 'Listagem de produtos Realizada',
                    produtos
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensagem: 'Listagem de produtos não realizada'
                })
            })
    })


    app.post('/produtos-create', async (req, res) => {

        await Produtos.create(req.body)
            .then(() => {
                return res.json({
                    error: false,
                    mensagem: 'Produto cadastrado'
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensagem: error.errors[0]['message']
                })
            })
    })


    app.put('/produtos-update/:id', async (req, res) => {
        await Produtos.update(req.body, {
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



    app.delete('/produtos-delete/:id', async (req, res) => {
        await Produtos.destroy({
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


module.exports = ProdutosRoute