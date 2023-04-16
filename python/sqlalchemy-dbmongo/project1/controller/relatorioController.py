"""
Docstring. Descreva aqui as especificidades da classe.
    """

from services.Relatorio.RelatorioService import RelatorioService


class RelatorioController():
    def __init__(self) -> None:
        pass

    @classmethod
    def listar(self, id: str) -> str:
        if len(id) == 0:
            return print(f"ERRO >>> Necessário informar todos os dados solicitados")
        else:
            return RelatorioService().imprimir(id)
