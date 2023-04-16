"""
Classe que fornece os campos de registro e depois chama a variável

Bastante simples, apenas para exemplificar conceitos.
    """


from controller.ClienteController import ClienteController


class ClienteRegister():
    def __init__(self) -> None:
        pass

    @classmethod
    def form_register(self) -> str:
        nome: str = input('Digite seu nome: ')
        cpf: str = input('Digite seu CPF: ')
        endereco: str = input('Digite o nome da sua rua: ')
        senha: str = input('Digite sua senha: ')

        return ClienteController().registro(nome, cpf, endereco, senha)
