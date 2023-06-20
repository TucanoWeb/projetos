from flask_restful import Resource
from repositories.vendas.topProductGender import ListProductTopPerGender


class ProductsTopGender(Resource):

    def get(self):
        result = ListProductTopPerGender.get()
        return result
