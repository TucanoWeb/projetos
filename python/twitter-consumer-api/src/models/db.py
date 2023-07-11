from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import src.envs.keys as data_base


class DataBase():

    def connect():
        uri = data_base.URI
        table = data_base.TABLE
        # Create a new client and connect to the server
        client = MongoClient(uri, server_api=ServerApi('1'))
        # Send a ping to confirm a successful connection
        try:
            db = client.table
            client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
            return db
        except Exception as e:
            return print(e)
    
    @classmethod
    def collection_twitterapi(self):
        conn = self.connect()
        collection = conn.twitterapi
        return collection
