"""
Docstring. Descreva aqui as especificidades da classe.
    """


from services.Clientes.ClientesServices import ClientesServices


class ClienteController():
    def __init__(self) -> None:
        pass

    @classmethod
    def registro(self, nome: str, cpf: str, endereco: str, senha: str) -> str:
        if len(nome) == 0 or len(cpf) == 0 or len(endereco) == 0 or len(senha) == 0:
            return print(f"ERRO >>> Necessário informar todos os dados solicitados")

        else:
            return ClientesServices().writerDB(nome, cpf, endereco, senha)
