from src.models.db import DataBase


class MongoFindOne():

    def find_one(id):
        collection = DataBase.collection_twitterapi()
        response = collection.find_one({"id": id})
        if response:
            return [response]
        else:
            return [{}]
