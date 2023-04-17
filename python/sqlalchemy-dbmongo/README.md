### Utilização de SQLAlchemy e PyMongo para persistência de dados

- Modularização de funções (com importação);
- Utilização de entities (modularização) com ForeignKey para SQLAlchemy utilizando SQLite;
- Possibilidade de cadastro de várias contas para cada cliente;
- Registro de extratos via MongoDB (noSQL);
- Tipagem de dados nativa;
- Utilização de decorators
- Entidade controller para validar e não sobrecarregar o endpoint;
- Criação de modelos para centralizar mensagens



**GET STARTER**

1 - Gere sua chave em MongoAtlas através do link https://cloud.mongodb.com/

2 - Insira o valor da sua chave em Services > Api > Auth > dbMongoKey, na constante KEY

3 - Inseria o nome da Tabela na constante DBNAME, no mesmo arquivo.

4 - Execute os passos abaixo para ativar o ambiente virtual para rodar a aplicação (venv):

` cd .\project1\Scripts\`

`  .\active\`

5 - Você verá o nome (project1) no início da linha de comando, mostrando que ativou o ambiente virtual com sucesso;

6 - Agora, basta retornar a pasta  raiz para executar a aplicação

` cd ..\..`

`  python .\main.py`

