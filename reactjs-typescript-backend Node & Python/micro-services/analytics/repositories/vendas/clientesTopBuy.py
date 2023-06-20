from models.dataFrames import DataFrameCreate
from flask import jsonify


class ListTop10BuyClientes():

    @classmethod
    def get(self):
        df = DataFrameCreate.df_vendas()
        result = df.groupby("name")["spent"].sum().sort_values(ascending=False).head(10)

        result_converted = []

        for key, value in result.to_dict().items():
            result_converted.append({
                "name": key,
                "quantity": value
            }
            )

        return result_converted
