from flask import request, json
from flask_restful import Resource

from models.db import devs, habilities


class InsertDevs(Resource):
    def post(self):
        body = json.loads(request.data)
        if len(devs) > 0:
            for i in range(len(devs)):
                if devs[i]['id'] == body['id']:
                    return {"error": "true", "message": "User already registered"}
                else:
                    devs.append({
                        "id": body['id'],
                        "name": body['name']
                    })
                    habilities.append({
                        "id": (len(habilities) + 1),
                        "id_user": body['id'],
                        "skills": body['skills']
                    })
                    return {"error": "false", "message": "User registered"}
        else:
            devs.append({
                        "id": body['id'],
                        "name": body['name']
                        })
            habilities.append({
                "id": (len(habilities) + 1),
                "id_user": body['id'],
                "skills": body['skills']
            })
            return {"error": "false", "message": "User registered"}
