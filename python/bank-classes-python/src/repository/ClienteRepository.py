from globals import values


class FisicaRepository():
    
    def __init__(self, endereco: dict, contas: list, cpf: str, nome: str, data_nascimento: str) -> None:
        self._endereco = endereco
        self._contas = contas
        self._cpf = cpf
        self._nome = nome
        self._data_nascimento = data_nascimento

    def __str__(self) -> str:
        return self

    def printData(self) -> str:
        return self._nome, self._cpf

    def gerarIDClient(self) -> int:
        values
        return values.clients_fisicos[-1]['id_client'] + 1
    
    def cadastrar(self) -> str:
        
        UserIDGenerator: int = self.gerarIDClient()
        
        values.clients_fisicos.append({
            'id_client': UserIDGenerator,
            'nome': self._nome,
            'data_de_nascimento': self._data_nascimento,
            'cpf': self._cpf,
            'endereco': self._endereco,
            'contas': self._contas
        }
        )
                                      
        #print(values.clients_fisicos)                                        
        return print(f"\n>>> {self.printData()[0]}, seu cadastro foi realizado com sucesso. Seu ID de usuário é {UserIDGenerator} e o seu CPF é {self.printData()[1]}. Utilize ID e CPF para fazer login no painel e movimentar ou criar novas contas.") 
