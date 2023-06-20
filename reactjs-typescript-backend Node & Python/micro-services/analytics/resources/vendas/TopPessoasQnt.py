from flask_restful import Resource
from repositories.vendas.clientesTopQty import ListTop10Qty


class ListTop10PessoasQty(Resource):

    def get(self):
        result = ListTop10Qty.get()
        return result
