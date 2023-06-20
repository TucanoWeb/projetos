const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json)
app.use(cors())

const Clientes = require('../../models/entities/Clientes')
const sequelize = require('../../models/db')

const ClientesRoute = (app) => {

    app.get('/clientes', async (req, res) => {

        await Clientes.findAll({
            //order antiga
            // order: [['antiguidade', 'ASC']]
            order: [['name', 'ASC']]
        })
            .then((clientes) => {
                return res.json({
                    error: false,
                    mensagem: 'Listagem de Clientes Realizada',
                    clientes
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensagem: 'Listagem de Clientes não realizada'
                })
            })
    })


    app.post('/clientes-create', async (req, res) => {

        await Clientes.create(req.body)
            .then(() => {
                return res.json({
                    error: false,
                    mensagem: 'Usuário cadastrado'
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensagem: error.errors[0]['message']
                })
            })
    })


    app.put('/clientes-update/:id', async (req, res) => {
        await Clientes.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.json({
                    error: false,
                    mensagem: 'Usuário Atualizado'
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensagem: error.errors[0]['message']
                })
            })

    })



    app.delete('/clientes-delete/:id', async (req, res) => {
        await Clientes.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.json({
                    error: false,
                    mensagem: 'Usuário deletado com sucesso'
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


module.exports = ClientesRoute