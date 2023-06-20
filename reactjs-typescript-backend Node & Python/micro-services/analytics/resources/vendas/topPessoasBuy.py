from flask_restful import Resource
from repositories.vendas.clientesTopBuy import ListTop10BuyClientes

class ListTop10PessoasBuy(Resource):

    def get(self):
        result = ListTop10BuyClientes.get()
        return result
