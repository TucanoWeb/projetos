import pandas as pd

# DataFrame
df = pd.read_csv(
    "./data/teste.csv", sep=",")

# Visualizando as 5 primeiras linhas
print(df.head())
print("\n #################### \n")

# Renomear colunas
df = df.rename(columns={
    "country": "Pais",
    "region": "Região"
})

print(df.head())


# Verificar a quantidade de linhas e colunas do dataframe
print(df.shape)


# Printar colunas
print(df.columns)

# Printar o tipo de dados em cada coluna
print(df.dtypes)

# Printar últimas linhas
print("\n ##### Últimas linhas #####")
print(df.tail())

# Print retorando informações estatisticas
print("\n ##### Média das colunas #####")
print(df.describe())

# Fazer um filtro dos dados
print("\n ##### Filtro #####")
print(df["Pais"].unique())  # Retorna os paises sem repetição
brazil = df.loc[df["Pais"] == "Brazil"]
print(brazil.head())

# Agrupar dados
print("\n ##### Agrupamento de Região, definindo quantos países tem em cada região #####")
print(df.groupby("Região")["Pais"].nunique())

# Verificar a média de life_exp para cada país
print("\n ##### Verificar a média de life_exp para cada continente #####")
print(df.groupby("Região")["life_exp"].describe().rename(columns={
    "count": "contadores",
    "mean": "média"
}))

# Retorna a soma de uma determinada coluna
print("\n ##### Soma de quantidade de países no mundo #####")
print(df["Pais"].nunique())
