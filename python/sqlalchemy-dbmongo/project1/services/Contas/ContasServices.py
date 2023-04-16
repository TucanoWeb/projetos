"""
Docstring. Descreva aqui as especificidades da classe.
    """

from models.db import Engine

from services.Relatorio.RelatorioService import RelatorioService

from sqlalchemy import text


class ContasService():

    # Estabelece a conexão com banco de dados
    engine: Engine = Engine.connection()

    def __init__(self) -> None:
        pass

    def writerDB(self, tipo: str, agencia: str, conta: str, id_cliente: str, saldo: str) -> None:
        self._tipo = tipo
        self._agencia = agencia
        self._conta = conta
        self._id_cliente = id_cliente
        self._saldo = saldo

        with self.engine.connect() as conn:
            conn.execute(text(
                f"INSERT INTO contas (tipo, agencia, conta, id_cliente, saldo) VALUES ('{self._tipo}', '{self._agencia}', '{self._conta}', '{self._id_cliente}', '{self._saldo}')"))
            conn.commit()

        RelatorioService().gerar(tipo, agencia, conta, id_cliente, saldo)

    @classmethod
    def listClienteDB(self, id: str) -> None:
        with self.engine.connect() as conn:
            result = conn.execute(
                text(f"SELECT * FROM contas WHERE id_cliente = '{id}'"))

            for row in result:
                print(row)
