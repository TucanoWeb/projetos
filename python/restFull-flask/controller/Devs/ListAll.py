from flask import request, json
from flask_restful import Resource

from models.db import devs, habilities


class ListDevs(Resource):
    def get(self):

        list_all = []
        for i_hab in range(len(habilities)):
            for i_devs in range(len(devs)):
                if habilities[i_hab]['id_user'] == devs[i_devs]['id']:

                    data = {
                        "id": devs[i_devs]['id'],
                        "name": devs[i_devs]['name'],
                        "skills": habilities[i_hab]['skills']
                    }

                    list_all.append(data)

        return list_all
