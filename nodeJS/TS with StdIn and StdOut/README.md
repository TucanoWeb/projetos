## PROJETO NODEJS

### CARACTERÍSTICAS

- A entrada da aplicação é via StdIn, com saída StdOut, utilizando um arquivo JSON;
- Dados armazenados em memória (sem persistência externa);
- Utilização de Typescript.

### GET STARTER

- Instale as dependências:
```bash
npm install
```

- Já existem comandos copiados para o arquivo JSON, no entanto, caso queira inserir ou alterar a ordem de execução, o arquivo está no diretório "Src > archives > file.JSON". O modelo se encontra no próprio arquivo

- Execute a aplicação:
```bash
npm run dev
```

- Para build:
```bash
npm run build
```

- Para Teste (modelo se encontra presente em "Src > tests"):
```bash
npm run test
```

### REGRAS DE NEGÓCIO

- Não é possível inserir mais de 5 itens iguais no mesmo pedido;
- Não é possível inserir itens em um pedido com status "WAITING_PAYMENT" (pedido fechado);
- Não é possível deleter itens em um pedido com status "WAITING_PAYMENT" (pedido fechado);
- Não é possível fechar pedidos sem itens;
- Não é possível fechar o pedido novamente estando este já com status de fechado  "WAITING_PAYMENT" (pedido fechado);
- Mais de um pedido pode ser criado;

### MODELOS DE ENTRADA E SAÍDA

------------------
1 - Criação de pedidos (Entrada):
```
    { "action": "CREATE_ORDER", "order_id": 1 }
```

1.1 - Criação de pedidos (Saída):
```
    { "status": "OPEN", "order_id": 1, "order_items": [], "total_amount": 0 }
```
------------------

2 - Inserção de itens (Entrada):
```
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
```

2.1 - Inserção de itens  (Saída):
```
    { "status": "OPEN","order_id": 1, "order_items": [ { "product_id": 1, "quantity": 1 } ], "total_amount": 500 }
```
------------------

3 - Inserção de itens que já constam no pedido (Entrada):
```
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
```

3.1 - Inserção de itens que já constam no pedido  (Saída):
```
    { "status": "OPEN","order_id": 1, "order_items": [ { "product_id": 1, "quantity": 1 } ], "total_amount": 500 }
    { "status": "OPEN","order_id": 1, "order_items": [ { "product_id": 1, "quantity": 2 } ], "total_amount": 1000 }
```
------------------

4 - Ultrapassar a quantidade máxima de 5 itens do mesmo produto no pedido (Entrada):
```
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }

```

4.1 - Ultrapassar a quantidade máxima de 5 itens do mesmo produto no pedido  (Saída):
```
    { "status": "OPEN","order_id": 1, "order_items": [ { "product_id": 1, "quantity": 1 } ], "total_amount": 500 }
    { "status": "OPEN","order_id": 1, "order_items": [ { "product_id": 1, "quantity": 2 } ], "total_amount": 1500 }
    { "status": "OPEN","order_id": 1, "order_items": [ { "product_id": 1, "quantity": 2 } ], "total_amount": 2000 }
    { "status": "OPEN","order_id": 1, "order_items": [ { "product_id": 1, "quantity": 2 } ], "total_amount": 2500 }
    { "status": "OPEN","order_id": 1, "order_items": [ { "product_id": 1, "quantity": 2 } ], "total_amount": 3000 }
    { "order_id": 1, "error": "MAX_PRODUCTS_REACHED" }

```
------------------

5 - Inserir um produto no pedido com status diferente de "OPEN" (Entrada):
```
    { "action": "ADD_ORDER_ITEM", "order_id": 1, "product_id": 1 }
```

5.1 - Inserir um produto no pedido com status diferente de "OPEN" (Saída):
```
    { "order_id": 1, "error": "ORDER_ALREADY_IN_CHECKOUT" }
```
------------------

6 - Remover item do pedido (Entrada):
```
    { "action": "REMOVE_ORDER_ITEM", "order_id": 1, "product_id": 1 }
```

6.1 - Remover item do pedido (Saída):
```
    { "status": "OPEN", "order_id": 1, "order_items": [], "total_amount": 0 }
```
------------------

7 - Remoção de item que não consta no pedido (Entrada)
```
    { "action": "REMOVE_ORDER_ITEM", "order_id": 1, "product_id": 6 }
```

7.1 - Remoção de item que não consta no pedido (Saída): A array de produtos não deve ser alterada (order_items)

------------------

8 - Finalizar pedido (Entrada)
```
    { "action": "CHECKOUT_ORDER", "order_id": 1 }
```

8.1 - Finalizar pedido (Saída):
```
{ "status": "WAITING_PAYMENT", "order_id": 1, "order_items": [ { "product_id": 1, "quantity": 1} ], "total_amount": 500 }
```

------------------

9 - Finalizar pedido sem produtos (Entrada)
```
    { "action": "CHECKOUT_ORDER", "order_id": 1 }
```

9.1 - Finalizar pedido sem produtos (Saída):
```
{ "order_id": 1, "error"; "ORDER_IS_EMPTY" }
```

------------------

10 - Finalizar pedido com status "WAITING PAYMENT" (Entrada)
```
    { "action": "CHECKOUT_ORDER", "order_id": 1 }
```

10.1 - Finalizar pedido com status "WAITING PAYMENT"  (Saída):
```
{ "order_id": 1, "error": "ORDER_ALREADY_IN_CHECKOUT" }
```

------------------


## DÚVIDAS
- GitHub: https://github.com/TucanoWeb
- Linkedin: https://www.linkedin.com/in/eric-ricielle-2aa1ba237/
- Aulas e Realização de projetos e/ou trabalhos de faculdade ou cursos (incluindo desafios): https://www.superprof.com.br/faco-seus-trabalhos-faculdade-reactjs-nextjs-python-sql-sysadmin-css-html-nodejs-typescript.html