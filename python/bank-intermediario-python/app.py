from functions import controller
from models import msgs, menu
import re

# Regex para aceitar apenas números
number_pattern = "^\\d+$"

print(msgs.initial)

option: int = int(input('Digite a opção desejada: '))

while(option != 0):
    if(option > 2):
        print(msgs.option_error)
    elif(option == 1):
        nome: str = input('\nDigite seu Nome: ')
        data_nascimento: str = input('Digite sua data de nascimento: ')
        cpf: str = input('Digite seu CPF (apenas números): ')
        while(re.match(number_pattern, cpf) == None):
            print('>>> ERRO: CPF aceita apenas números')
            cpf: str = input('Digite seu CPF (apenas números): ')
        rua: str = input('Digite sua Rua: ')
        numero_casa: str = input('Digite o número da sua casa: ')
        bairro: str = input('Informe seu bairro: ')
        cidade: str = input('Informe sua cidade: ')
        estado: str = input('Informe seu estado: ')
        endereco_dict: dict = {
            'rua': rua,
            'numero_casa': numero_casa,
            'bairro': bairro,
            'cidade': cidade,
            'estado': estado
        }
        controller.criar_conta(
            nome, data_nascimento, cpf, endereco_dict)

    elif(option == 2):
        id_accont: str = input('\nInforme o id da sua conta: ')
        cpf_account: str = input('Informe seu CPF(apenas números): ')
        
        result: bool = controller.access_account(id_accont, cpf_account)
        
        if(result):
            menu.menu(int(id_accont))
        else:
            print('\n\nDados de Acesso incorretos!')
        

    print(msgs.initial)
    option = int(input('Digite a opção desejada: '))
    
print(msgs.good_bye)
