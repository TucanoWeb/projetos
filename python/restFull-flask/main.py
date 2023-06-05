from flask import Flask
from flask_restful import Api

from controller.Devs.InsertNew import InsertDevs
from controller.Devs.ListAll import ListDevs
from controller.Devs.FindOne import FindOne
from controller.Devs.EditDevs import EditDevsData
from controller.Habilities.EditHabilities import EditDevsHab


app = Flask(__name__)
api = Api(app)

api.add_resource(InsertDevs, '/devs/insert')
api.add_resource(ListDevs, '/devs/all')
api.add_resource(FindOne, '/devs/search/<int:idUser>')
api.add_resource(EditDevsData, '/devs/manage/profile/<int:idUser>')
api.add_resource(EditDevsHab, '/devs/manage/hab/<int:idUser>')


if __name__ == "__main__":
    app.run(debug=True)
