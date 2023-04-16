"""
Docstring. Descreva aqui as especificidades da classe.
    """

from controller.relatorioController import RelatorioController


class RelatorioRegister():
    def __init__(self) -> None:
        pass

    @classmethod
    def form_register(self) -> str:
        id: str = input('Digite seu id: ')

        return RelatorioController().listar(id)
