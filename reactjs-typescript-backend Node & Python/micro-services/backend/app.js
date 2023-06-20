const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const { ClientesRoute, ProdutosRoute, VendasRoute } = require('./routes/index')

// Descomentar apenas se houver alteração na regra de negócio relacionado a chave estrangeira.
// const syncRelationShip = require('./models/entities/RelationShips') 

ClientesRoute(app)
ProdutosRoute(app)
VendasRoute(app)



app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8081')
})
