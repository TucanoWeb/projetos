import pandas as pd
from envs.relativePath import RelativePath


class dataFrame():
    def __init__(self) -> None:
        pass 

    @classmethod
    def setDataFrame(self):
        
        public_path = RelativePath.data()
        # Para carregar excel, lembrar de instalar a biblioteca pip install openpyxl.
        # É possível, após indicar o caminho do arquivo, colocar uma vírgula e especificar parâmetros, como skiprows, escolhar abas (sheetName).. etc
        df1 = pd.read_excel(f"{public_path}/Aracaju.xlsx")
        df2 = pd.read_excel(f"{public_path}/Fortaleza.xlsx")
        df3 = pd.read_excel(f"{public_path}/Natal.xlsx")
        df4 = pd.read_excel(f"{public_path}/Recife.xlsx")
        df5 = pd.read_excel(f"{public_path}/Salvador.xlsx")

        # Juntar todos os arquivos no df
        df = pd.concat([df1, df2, df3, df4, df5])
        print(df.head(5))

        return df
