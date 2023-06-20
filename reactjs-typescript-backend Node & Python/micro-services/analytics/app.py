from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from routes.vendas.vendasRoute import RoutesVendas

app = Flask(__name__)
CORS(app)
api = Api(app)


# Rotas
RoutesVendas.init(api)


if __name__ == '__main__':
    app.run(debug=True)
