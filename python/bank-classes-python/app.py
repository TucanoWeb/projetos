from src.controller.conta.AccessAccount import AccessAcount
from src.controller.VerifyData import VerifyDataFisica
from models import msgs, accountsAccess
import re

# Regex para aceitar apenas números
number_pattern = "^\\d+$"

print(msgs.initial)

option: int = int(input('Digite a opção desejada: '))

while(option != 0):
    if(option > 2):
        print(msgs.option_error)

    elif(option == 1):
        print(msgs.client_type)
        tipoConta: int = int(input('\nPor favor, informe o tipo de conta: '))

        while(tipoConta > 0):
            print(msgs.option_error)
            print(msgs.client_type)
            tipoConta: int = int(
                input('\nPor favor, informe o tipo de conta: '))

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

        # Verifica o tipo de conta para chamar o validador de dados informados. Obviamente, em uma implementação com front-end, isso poderá ser conferido em runTime.
        if tipoConta == 0:
            VerifyDataFisica(
                nome, endereco_dict, 'CC', data_nascimento, cpf).verify()
        else:
            print('Contas Jurídicas ainda não estão implementadas')

    elif(option == 2):
        id_accont: str = input('\nInforme o id da sua conta: ')
        cpf_account: str = input('Informe seu CPF(apenas números): ')

        result: bool = AccessAcount.controller(id_accont, cpf_account)

        if(result):
            accountsAccess.menu(int(id_accont))
            # menu.menu(int(id_accont))
        else:
            print('\n\n>>> ERRO: Dados de Acesso incorretos!')

    print(msgs.initial)
    option = int(input('Digite a opção desejada: '))

print(msgs.good_bye)
