from src.models.db import DataBase

class MongoInsertManyTwitterapi():
    
    def insert_many(data):
        collection = DataBase.collection_twitterapi()
        collection.insert_many(data)
        
    