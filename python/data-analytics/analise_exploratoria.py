import pandas as pd
import matplotlib.pyplot as plt
plt.style.use("seaborn")

df = pd.read_excel("./Data/AdventureWorks.xlsx")

print(df.head())
print(df.shape)
print(df.dtypes)


# Verificar receita total
print(df["Valor Venda"].sum())

# Verificando custo total
df["custo"] = df["Custo Unitário"].mul(df["Quantidade"])
print(df.head())

# Verificar custo total
print(df["custo"].sum(), 2)

# Verificar lucro
df["lucro"] = df["Valor Venda"] - df["custo"]
print(df.head())

# Lucro total
print(df["lucro"].sum(), 2)

# Verificando quantos dias demorou para o produto ser enviado
df["Tempo_envio"] = df["Data Envio"] - df["Data Venda"]
print(df.head())

# Extraindo apenas os dias, pois ao realizar a extração acima em df["Tempo_envio"], retorna uma string, sendo quantidade days
df["Tempo_envio"] = (df["Data Envio"] - df["Data Venda"]).dt.days
print(df.head())

# Média de envio
print(df["Tempo_envio"].mean())

# Média de envio por marca
print(df.groupby("Marca")["Tempo_envio"].mean())

# Agrupar lucro por ano e marca
print(df.groupby([df["Data Venda"].dt.year, "Marca"])["lucro"].sum())

# No print anterior, verifica-se que a apresentação dos dados está com notação. Para alterar isso, vamos alterar o formato de apresentação
pd.options.display.float_format = '{:20,.2f}'.format

# Verificando o lucro por ano
lucro_ano = df.groupby([df["Data Venda"].dt.year, "Marca"])["lucro"].sum().reset_index()
print(lucro_ano)

# Total de produtos vendidos. Veja que entre parenteses é a coluna e entre colchetes, será o que vai ser somado
# Ou seja, vamos agrupar por produto, vai pegar a coluna quantidade, somar e ascending=false para trazer do maior para menor
print(df.groupby("Produto")["Quantidade"].sum().sort_values(ascending=False))

# Para colocar como gráfico
df.groupby("Produto")["Quantidade"].sum().sort_values(ascending=False).plot.barh(title="Total produtos vendidos")
plt.xlabel("Total")
plt.ylabel("Produto")

# Vamos agrupar por Ano e calcular o lucro
print(df.groupby(df["Data Venda"].dt.year)["lucro"].sum())
df.groupby(df["Data Venda"].dt.year)["lucro"].sum().plot.barh(title="Lucro x Ano")
plt.xlabel("Ano")
plt.ylabel("Receita")

# Agrupar apenas vendas de 2009
df_2009 = df[df["Data Venda"].dt.year == 2009]
print(df_2009)

# Criar gráfico com a descrição dos itens no eixo x sendo horizontal, ao invés de vertical
df_2009.groupby("Marca")["lucro"].sum().plot.bar(title="Lucro x Marca")
plt.xlabel("Marca")
plt.ylabel("Lucro")
plt.xticks(rotation="horizontal")

# Agora, vamos puxar o lucro por classe. Ou seja, vamos agrupar por classe e calcular o lucro
df_2009.groupby("Classe")["lucro"].sum().plot.bar(title="Classe x Lucro")
plt.xlabel("Classe")
plt.ylabel("Lucro")
plt.xticks(rotation="horizontal")

# Vamos analisar o tempo de envio através do describe
print(df["Tempo_envio"].describe())

# Podemos ver, através do describe acima, que houve entrega com prazo discrepante, sendo 20 dias. Agora, vamos ver que entrega foi essa que demorou tanto

print(df[df["Tempo_envio"] == 20])