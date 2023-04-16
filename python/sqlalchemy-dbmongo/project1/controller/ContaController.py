"""
Docstring. Descreva aqui as especificidades da classe.
    """

from services.Contas.ContasServices import ContasService


class ContaController():
    def __init__(self) -> None:
        pass

    @classmethod
    def registro(self, tipo: str, agencia: str, conta: str, id_cliente: str, saldo: str) -> str:
        if len(tipo) == 0 or len(agencia) == 0 or len(conta) == 0 or len(saldo) == 0 or len(id_cliente) == 0:
            return print(f"ERRO >>> Necessário informar todos os dados solicitados")

        else:
            return ContasService().writerDB(tipo, agencia, conta, id_cliente, saldo)

    @classmethod
    def listar(self, id: str) -> str:
        if len(id) == 0:
            return print(f"ERRO >>> Necessário informar todos os dados solicitados")
        else:
            return ContasService().listClienteDB(id)
