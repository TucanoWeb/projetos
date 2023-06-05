from flask import request, json
from flask_restful import Resource

from models.db import devs, habilities


class EditDevsData(Resource):
    def put(self, idUser):
        body = json.loads(request.data)
        for i in range(len(devs)):
            if devs[i]['id'] == idUser:
                result = i
        try:
            devs[result] = body
            return {"error": "false", "message": "User edited"}
        except:
            return {"error": "true", "message": "User not exist"}

    def delete(self, idUser):
        for i in range(len(devs)):
            if devs[i]['id'] == idUser:
                resultDevs = devs[i]

        for i in range(len(habilities)):
            if habilities[i]['id_user'] == idUser:
                resultHab = habilities[i]

        try:
            devs.remove(resultDevs)
            habilities.remove(resultHab)
            return {"error": "false", "message": "User removed"}
        except:
            return {"error": "true", "message": "User not exist"}
