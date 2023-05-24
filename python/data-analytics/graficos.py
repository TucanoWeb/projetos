from Services.dataFrame import dataFrame
import pandas as pd
import matplotlib.pyplot as plt

df = dataFrame.setDataFrame()

# Conta quantas linhas cada LojaID tem nos arquivos. Ou seja, no retorno abaixo, a loja com id 1036 realizou 117 vendas.
print(df["LojaID"].value_counts(ascending=False))

# Gráfico de barras. Necessário instalar o matplotlib atráves do comando pip install matplotlib
print(df["LojaID"].value_counts(ascending=False).plot.bar())

# Gráfico de barras horizontais
print(df["LojaID"].value_counts(ascending=False).plot.barh())

# Gráfico de pizza por ano e receita. Lembrando que é necessário primeiro criar a coluna Receita, pois ela não existe no documento. Foi criado nos arquivos anteriores.
# print(df.groupby(df["Data"].dt.year)["Receita"].sum().plot.pie())


# Total de vendas por cidade
print(df["Cidade"].value_counts())

# Dando um título para o gráfico e inserindo as legendas nos eixos x e y
df["Cidade"].value_counts().plot.bar(title="Total de Vendas por Cidade")
plt.xlabel("Cidade")
plt.ylabel("Vendas")

# Dando um título para o gráfico e inserindo as legendas nos eixos x e y e alterando a cor do gráfico para vervelho
df["Cidade"].value_counts().plot.bar(
    title="Total de Vendas por Cidade", color="red")
plt.xlabel("Cidade")
plt.ylabel("Vendas")

# Alterando o estilo do matplotlib (matplotlib.org)
plt.style.use("ggplot")

# Criando colunas de dia e mês
df["dia_venda"], df["mes_vendas"] = (df["Data"].dt.day, df["Data"].dt.month)

df.groupby(df["mes_vendas"])["Qtde"].sum().plot(
    title="Total produtos vendidos por mês")
plt.xlabel("Mês")
plt.ylabel("Total Produtos Vendidos")
plt.legend()


# histograma (cores, tipos de gráficos e marcadores estão disponíveis na documentação)
plt.hist(df["Qtde"], color="magenta")

# Criando um gráfico de dispersão

df["Ano_Venda"] = df["Data"].dt.year
df_2019 = df[df["Ano_Venda"] == 2019]
df["Receita"] = df["Vendas"].mul(df["Qtde"])

plt.scatter(x=df_2019["dia_venda"], y=df_2019["Receita"])


# Salvando em png
df_2019.groupby(df_2019["mes_vendas"])["Qtde"].sum().plot(marker="v")
plt.title("Quantidade de produtos vendidos x mês")
plt.xlabel("Mês")
plt.ylabel("Total Produtos Vendidos")
plt.legend()
plt.savefig("grafico QTDE X MES.png")
