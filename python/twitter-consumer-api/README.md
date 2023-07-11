### CONSIDERAÇÕES

- Ao criar seu projeto em https://developer.twitter.com/en, insira as keys do projeto em ./envs/keys.py
- É necessário ter uma conta básica ou Pro para requisição aos endpoints, de outra forma, fica limitado apenas aos endpoints de postagem e exclusão de tweet.

- Caso não tenha uma licença pro, utilize o mock. O modelo, inclusive, está montado com ele.


### GET STARTER

- Crie o ambiente virtual;
- Faça a instalação das dependências


- Para iniciar

uvicorn main:app --reload


### PARA TESTAR
- Navegue até src/tests e rode:
```bash
pytest 'nome do arquivo'
```
