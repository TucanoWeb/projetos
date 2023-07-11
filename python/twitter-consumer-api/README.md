### CONSIDERAÇÕES

- Ao criar seu projeto em https://developer.twitter.com/en, insira as keys do projeto em ./envs/keys.py
- É necessário ter uma conta básica ou Pro para requisição aos endpoints, de outra forma, fica limitado apenas aos endpoints de postagem e exclusão de tweet.

- Caso não tenha uma licença pro, utilize o mock. O modelo, inclusive, está montado com ele.
- Necessário criar uma pasta em src chamada envs, que deve conter suas chaves do mongoDB Atlas. Ficará assim "src/envs/keys.py"


### GET STARTER

- Crie o ambiente virtual;
```bash
python -m venv nomedavenv
```
- Faça a instalação das dependências
```bash
pip install -r requirements.txt
```

- Para iniciar
```bash
uvicorn main:app --reload
```


### PARA TESTAR
- O arquivo de configuração do pystest foi configurado, de forma que precisa apenas rodar o comando. Arquivo de configuração é pytest.ini, na raiz do projeto:
```bash
pytest
```
