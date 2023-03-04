from src.controller.cliente.Cliente import ClienteController
from src.repository.ClienteRepository import FisicaRepository
from globals import values


class PessoaFisica(ClienteController):
    def __init__(self, endereco: dict, contas: list, cpf: str, nome: str, data_nascimento: str) -> None:
        super().__init__(endereco, contas)
        self._cpf = cpf
        self._nome = nome
        self._data_nascimento = data_nascimento

        # Regras de negócio

    def cadastrarCliente(self) -> str:
        
        for i in range(len(values.clients_fisicos)):
            if values.clients_fisicos[i]['cpf'] == self._cpf:
                return print(f"\n>>>ERRO: O CPF já consta em nossa base de dados!")
                
        result = FisicaRepository(self._endereco, self._contas, self._cpf, self._nome, self._data_nascimento).cadastrar()
        return result