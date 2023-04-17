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

        # Recebe o valor de KEY
        client = pymongo.MongoClient(dbMongoKey.KEY)

        # Recebe o valor de DBNAME
        tabela: str = dbMongoKey.DBNAME

        db = client.tabela

        # Para testar a conexão
        # collection = db.test_collection
        # print("Testando a conexão: ", collection)

        return db
