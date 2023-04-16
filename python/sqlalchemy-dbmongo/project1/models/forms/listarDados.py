"""
Classe que fornece os campos de registro e depois chama a variável

Bastante simples, apenas para exemplificar conceitos.
    """


from controller.ContaController import ContaController


class ListarDadosCliente():
    def __init__(self) -> None:
        pass

    @classmethod
    def listar(self) -> str:
        id: str = input('Digite seu id: ')

        return ContaController().listar(id)
