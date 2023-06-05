from flask import request, json
from flask_restful import Resource

from models.db import devs, habilities


class FindOne(Resource):
    def get(self, idUser):
        for i in range(len(devs)):
            if devs[i]['id'] == idUser:
                resultDevs = devs[i]

        for i in range(len(habilities)):
            if habilities[i]['id_user'] == idUser:
                resultHab = habilities[i]

        try:
            result = {
                'profile': resultDevs,
                'skills': resultHab
            }
            return result
        except:
            return {"error": "true", "message": "User not exist"}
