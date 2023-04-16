"""
Docstring. Descreva aqui as especificidades da classe.
    """

from models.db import Engine

from sqlalchemy import text


class ClientesServices():

    # Estabelece a conexão com banco de dados
    engine: Engine = Engine.connection()

    def __init__(self) -> None:
        pass

    def writerDB(self, nome: str, cpf: str, endereco: str, senha: str) -> None:
        self._nome = nome
        self._cpf = cpf
        self._endereco = endereco
        self._senha = senha

        with self.engine.connect() as conn:
            conn.execute(text(
                f"INSERT INTO clientes (nome, cpf, endereco, senha) VALUES ('{self._nome}', '{self._cpf}', '{self._endereco}', '{self._senha}')"))
            conn.commit()

    def listClienteDB(self) -> None:
        with self.engine.connect() as conn:
            result = conn.execute(text("SELECT * FROM clientes"))

            for row in result:
                print(row)
