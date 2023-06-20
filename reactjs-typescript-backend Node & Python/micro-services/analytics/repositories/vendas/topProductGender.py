from models.dataFrames import DataFrameCreate


class ListProductTopPerGender():

    @classmethod
    def get(self):
        df = DataFrameCreate.df_vendas()
        df_q1 = df.query("gender == 'M'")
        df_q2 = df.query("gender == 'F'")
        result_m = df_q1["product"].value_counts(ascending=False).head(10)
        result_f = df_q2["product"].value_counts(ascending=False).head(10)

        final_result_f = []
        final_result_m = []

        for key, value in result_f.to_dict().items():
            final_result_f.append({
                "name": key,
                "quantity": value
            })

        for key, value in result_m.to_dict().items():
            final_result_m.append({
                "name": key,
                "quantity": value
            })

        result = [{
            "gender": "F",
            "data": final_result_f
        },
            {
            "gender": "M",
            "data": final_result_m
        }]

        return result
