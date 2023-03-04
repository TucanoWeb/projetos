from classes.repository import Repository
from src.api.auth import Auth
from globals import values

# Instanciando a classe Repository e atribuindo a instância à variável repository
repository = Repository()


class Controller:
    
    # Não é necessário, na situação abaixo, inicializar a classe, pois não há nenhum valor sendo instanciado na classe Controller. No entanto, o código foi mantido para controle e prática.
    def __init__(self) -> None:
        pass
    
       
    @staticmethod # O staticmethod é utilizado quando não é necessário pegar ou manipular nenhuma valor da instância ou instanciado. Ou seja, é como se fosse uma função normal
    def criar_conta(nome: str, data_nascimento: str, cpf: str, endereco: dict):
        
        cpf_duplicate: int = 0
        accounts_list: list = values.accounts
        
        if(nome == '' or data_nascimento == '' or cpf == ''):
            print('Você precisa informar todos os parâmetros')
            return False
        
        for i in range(len(accounts_list)):
            if(accounts_list[i]['cpf'] == cpf):
                cpf_duplicate += 1
        
        if(cpf_duplicate == 1):
            print('Já existe uma conta com o CPF informado.')
            return False
        else:
            repository.criar_conta(nome, data_nascimento, cpf, endereco)
            id_account: int = values.accounts[-1]['id']
            print(f'\n\n{nome}, sua conta foi criada com sucesso. O id da sua conta é {id_account} e o cpf registrado foi {cpf}. Utilize id e cpf para acessar sua conta')      
            return True
        

    @staticmethod
    # Início do controller acesso à conta, com as regras de negócio    
    def access_account(id: str, cpf: str) -> str:
        if(id == '' or cpf == ''):
            return print('Você precisa informar todos os parâmetros')
        else:
            result = Auth().verify(id, cpf)
            return result
            

    def depositar(value: float, balance: float) -> str:
        if(value <= 0):
            return print('O valor do depósito não pode ser negativo')
        else:
            return print(f'Depósito realizado com sucesso. Seu saldo atual é de: R${repository.depositando(value, balance)}')


    def sacar(value: float, balance: float, quantity_saque: int) -> str:
        if(value > balance):
            return print('Saldo insuficiente.')
        elif(quantity_saque <= 0):
            return print('Quantidade de saques excedida')
        elif(value > 500):
            return print('Não é permitido saques maiores que R$500')
        else:
            return print(f"""
                        Saque realizado com sucesso.
                        Seu saldo atualmente é de R${repository.sacando(value, balance)}
                        Você atualmente possui {values.quantity_withdraw} saques disponíveis.
                        """)
