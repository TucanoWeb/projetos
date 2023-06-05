from flask import Flask, request, json
from flask_restful import Resource, Api

from models.db import devs, habilities


class EditDevsHab(Resource):
    def put(self, idUser):
        body = json.loads(request.data)
        for i in range(len(habilities)):
            if habilities[i]['id_user'] == idUser:
                result = i
        try:
            habilities[result] = body
            return {"error": "false", "message": "User edited"}
        except:
            return {"error": "true", "message": "User not exist"}
