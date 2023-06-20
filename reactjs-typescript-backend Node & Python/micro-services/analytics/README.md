### Utilização de Flask_Restfull + SQLAlchemy para criação de API para persistência de dados e análise exploratória com pandas

- Modularização de funções com baixo acoplamento e alta coesão.



**GET STARTER**

1 - Crie o ambiente virtual. No caso do VSCode, utilize o comando abaixo:

```python
python -m venv nome_env
```

2 - Ative o ambiente virtual

```bash
cd .\project1\Scripts\
```
```bash
.\active\
```

3 - Volte ao diretório raiz do projeto e faça a instalação das dependências

```python
pip install -r requeriments.txt
```

4 - Agora, basta retornar executar a aplicação


```python
python .\app.py
```


**ARQUITETURA**

**- Respositories:** Diretório que contêm os os métodos para o backend, que no caso, é o banco de dados SQLite. São os models.

**- Resources:** Diretório que contêm os os métodos que são chamados diretamente através das classes das rotas. Ou seja, quando a requisição bate no endpoint, são essas classes que são chamadas primeiro. São os controllers.

**- Routes:** Contêm as rotas dos endpoints.



