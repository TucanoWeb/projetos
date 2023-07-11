from src.mock.data import data_list
from src.services.MongoDB.insert_many import MongoInsertManyTwitterapi
from src.services.MongoDB.find_one import MongoFindOne


class DataListService():

    def find_all_with_schema():
        # Insere os dados de data_list no mongo db, collection twitterapi
        MongoInsertManyTwitterapi.insert_many(data_list)
        return data_list

    def find_all():
        return data_list
    
    def find_one(id):
        return MongoFindOne.find_one(id)
