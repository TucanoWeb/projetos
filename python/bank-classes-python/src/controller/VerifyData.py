from src.controller.conta.Conta import ContaController
from src.controller.cliente.PessoaFisica import PessoaFisica

class VerifyData():    
    def __init__(self, nome: str, endereco: dict, type: int) -> None:
        self._nome = nome
        self._endereco = endereco
        self._type = type

    def __str__(self):
        return self


class VerifyDataFisica(VerifyData):
    def __init__(self, nome: str, endereco: dict, type: str, data_nascimento: str, cpf: str) -> None:
        super().__init__(nome, endereco, type)
        self._data_nascimento = data_nascimento
        self._cpf = cpf

    def verify(self) -> bool:
        controller: int = 0

        for chave, valor in self.__dict__.items():
            if valor == '':
                controller += 1

        for chave, valor in self._endereco.items():
            if valor == '':
                controller += 1

        if controller > 0:
            print('\n>>> ERRO: Você precisa informar todos os parâmetros!')
            return False
        else:
            result = PessoaFisica(self._endereco, 'Nenhuma Conta Ainda',
                                  self._cpf, self._nome, self._data_nascimento).cadastrarCliente()

            if self._type == 'CC':
                ContaController.novaConta(self, 'CC')

            #print(values.accounts)
            return True
