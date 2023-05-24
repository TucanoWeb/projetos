from Services.dataFrame import dataFrame
import pandas as pd

df = dataFrame.setDataFrame()


# Verificar se a coluna Data está como datetime
print(df.dtypes)

# Caso não esteja, basta transformar
df["Data"] = pd.to_datetime(df["Data"])
print(df.dtypes)

# Vamos agrupar receita por ano. Primeiro, vamos criar a coluna receita
df["Receita"] = df["Vendas"].mul(df["Qtde"])
print(df.groupby(df["Data"].dt.year)["Receita"].sum())

# Criando uma coluna com o ano
df["Ano_Venda"] = df["Data"].dt.year
print(df.sample(5))


# Criando colunas de dia e mês
df["dia_venda"], df["mes_venda"] = (df["Data"].dt.day, df["Data"].dt.month)
print(df.sample(5))

# Retornando o mês mais antigo
print(df["Data"].min())

# Mostrando a diferença de dias considerando a data minima (mais antiga)
df["diferenca_dias"] = df["Data"] - df["Data"].min()
print(df.sample(5))

# Criando a coluna de trimestre
df["vendas_trimestre"] = df["Data"].dt.quarter
print(df.sample(10))

# Filtrar vendas de março de 2019 utilizando df.loc (localização)
vendas_marco = df.loc[(df["Data"].dt.year == 2019)
                      & (df["Data"].dt.month == 3)]
print("\n######################")
print(vendas_marco)
