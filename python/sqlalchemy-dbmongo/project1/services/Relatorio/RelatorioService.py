"""
Docstring. Descreva aqui as especificidades da classe.
    """

from models.nosql import NoSQL


class RelatorioService():
    def __init__(self) -> None:
        pass

    _connectDB = NoSQL.connect()

    @classmethod
    def gerar(self, tipo: str, agencia: str, conta: str, id_cliente: str, saldo: str) -> None:
        data = {
            "tipo": tipo,
            "agencia": agencia,
            "conta": conta,
            "id_cliente": id_cliente,
            "saldo": saldo
        }

        self._connectDB.project1.insert_one(data).inserted_id

    @classmethod
    def imprimir(self, cliente: str) -> None:
        result = self._connectDB.project1.find({
            "id_cliente": {'$eq': f"{cliente}"}
        })

        for results in result:
            print(results)
