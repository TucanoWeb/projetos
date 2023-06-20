from models.dataFrames import DataFrameCreate


class ListProductTopUse():

    @classmethod
    def get(self):
        df = DataFrameCreate.df_vendas()
        result = df["product"].value_counts(ascending=False).head(10)

        result_converted = []

        for key, value in result.to_dict().items():
            result_converted.append({
                "name": key,
                "quantity": value
            })

        return result_converted
