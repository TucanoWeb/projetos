"""
Docstring. Descreva aqui as especificidades da classe.
    """

import pymongo
from services.api.Auth import dbMongoKey


class NoSQL():
    def __init__(self) -> None:
        pass

    @classmethod
    def connect(self) -> object:

        # Insira sua chave abaixo
        client = pymongo.MongoClient(dbMongoKey.KEY)

        db = client.test

        # Para testar a conexão
        # collection = db.test_collection
        # print("Testando a conexão: ", collection)

        return db
