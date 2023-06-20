from flask_restful import Resource
from repositories.vendas.clientesTailQty import ListTail10Qty


class ListTail10PessoasQty(Resource):

    def get(self):
        result = ListTail10Qty.get()
        return result
