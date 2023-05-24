from Services.dataFrame import dataFrame

df = dataFrame.setDataFrame()

# Exibindo as 5 primeiras linhas
print(df.head())

# Exibindo as 5 últimas linhas
print(df.tail())

# Verificando o tipo de dados de cada coluna
print(df.dtypes)

# Pegando 5 linhas de amostra
print(df.sample(5))

# Alterar o tipo de dados de uma determinada coluna
df["LojaID"] = df["LojaID"].astype("object")

# Agora, vamos verificar novamente os tipos das colunas
print(df.dtypes)


# Agora, vamos verificar se há valores nulos no conjunto de dados e solicitar a quantidade
print(df.isnull().sum())

# Agora, vamos alterar o valor da linha que está nulo e alocar essa troca em memória (inplace=True), pois se isso não for feito, continuaremos trabalhando com valores nulos, pois o arquivo não é alterado.
df["Vendas"].fillna(0, inplace=True)
df["Qtde"].fillna(0, inplace=True)
# Caso queira substituir pela média das colunas, basta especificar como abaixo
df["Vendas"].fillna(df["Vendas"].mean(), inplace=True)
print(df.isnull().sum())

# Para apagar linhas com valores nulos
df.dropna(inplace=True)

# Para apagar linhas com valores nulos com base em apenas 1 coluna
df.dropna(subset=["Vendas"], inplace=True)

# Revomendo linhas que estejam com valores faltantes em todas as colunas
df.dropna(how='all', inplace=True)

######################
# CRIANDO UMA COLUNA #
######################

# Nome da coluna a ser criada é igual a coluna que será utilizada vezes (.mul) a coluna que será multiplicada (df["Qtde"])
df["Receita"] = df["Vendas"].mul(df["Qtde"]) 
print(df.head())

# Retornar a maior receita
print(df["Receita"].max())

# Retornar a menor receita
print(df["Receita"].min())

# Veja que no item acima, não há como identificar a loja com maior venda. Para isso, basta utilizar o método abaixo
print(df.nlargest(3, "Receita"))

# Veja que no item acima, não há como identificar a loja com menor venda. Para isso, basta utilizar o método abaixo
print(df.nsmallest(3, "Receita"))

# Podemos também agrupar a soma de vendas por cidade
print(df.groupby("Cidade")["Receita"].sum())

# Ordenar pelo conjunto  de dados
print(df.sort_values("Receita", ascending=False).head(10))

# Agora, vamos dizer que queremos agrupar os dados de receita por cidade e printar em ordem decrescente
receita_cidades = df.groupby("Cidade")["Receita"].sum()
print(receita_cidades.sort_values(ascending=False).head(10))



