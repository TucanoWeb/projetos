from flask_restful import Resource
from repositories.vendas.productsTop import ListProductTopUse


class ProductsTopUse(Resource):

    def get(self):
        result = ListProductTopUse.get()
        return result
