from functions import controller
from models import msgs
from globals import values


def menu(id: int):

    name_user: str = values.accounts[id]['nome']

    print(f'\n\nBem vindo(a) {name_user}. Por favor, selecione uma das opções abaixo: ')
    print(msgs.welcome)

    option: int = int(input('Digite a opção desejada: '))

    while(option != 0):
        if(option > 4):
            print(msgs.option_error)
        elif(option == 1):
            valor_deposito: float = float(
                input('Digite o valor para depósito: '))
            print(controller.depositar(valor_deposito, values.balance))
        elif(option == 2):
            value_withdraw: float = float(input('Digite o valor para saque: '))
            print(controller.sacar(value_withdraw,
                  values.balance, values.quantity_withdraw))
        elif(option == 3):
            print(f'Ainda não houveram movimentaçãoes' if len(
                values.extract) == 0 else values.extract)
        elif(option == 4):
            print(f'Seu saldo atualmente é de: R$ {values.balance}')

        print(msgs.welcome)
        option = int(input('Digite a opção desejada: '))
    
    print(msgs.logout_account)
