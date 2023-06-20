import sqlite3
import pandas as pd
from envs.relativePath import RelativePath


class DataFrameCreate():

    public_path = RelativePath.db()

    @classmethod
    def conn(self):
        return sqlite3.connect(f'{self.public_path}/database.sqlite')

    @classmethod
    def df_vendas(self):
        cnx = self.conn()
        return pd.read_sql_query("SELECT * FROM vendaProdutoClientes as vpc INNER JOIN clientes as cl ON vpc.id_clientes = cl.id Join produtos as pd ON vpc.id_produtos = pd.id", cnx)
