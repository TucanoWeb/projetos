"""
Classe que fornece os campos de registro e depois chama a variável

Bastante simples, apenas para exemplificar conceitos.
    """


from controller.ContaController import ContaController


class ContaRegister():
    def __init__(self) -> None:
        pass

    @classmethod
    def form_register(self) -> str:
        tipo: str = input('Digite o tipo de conta: ')
        agencia: str = '001'
        id_cliente: str = input('Digite o seu id: ')

        # Em conta, é possível puxar os dados do banco de dados e incrementar, de forma a criar contas únicas, no entanto, não é o propósito dessa atividade.
        conta: str = input('Digite a conta: ')

        # Em saldo, o ideal é criar uma função de depósito, mas não é o propósito dessa atividade.
        saldo: str = input('Digite o saldo: ')

        return ContaController().registro(tipo, agencia, conta, id_cliente, saldo)
