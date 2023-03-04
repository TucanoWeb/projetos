from src.controller.conta.Conta import ContaController
from models import msgs
from globals import values


def menuAccount(id: int, account: int):

    name_user: str = values.clients_fisicos[id]['nome']     
    accountSelected = values.accounts[id]['accounts'][account - 1]['id_account']
    
    print(accountSelected)
    
            
            
    print(f'\n\n{name_user}, a conta selecionada foi acessada. Por favor, escolha uma das opções abaixo: ')
    print(msgs.welcome)
    
    option: int = int(input('Digite a opção desejada: '))

    while(option != 0):
        if(option > 4):
            print(msgs.option_error)
        elif(option == 1):
            valor_deposito: float = float(
                input('Digite o valor para depósito: '))
            print(ContaController.depositar(valor_deposito, id, accountSelected))
        elif(option == 2):
            value_withdraw: float = float(input('Digite o valor para saque: '))
            print(ContaController.sacar(id, accountSelected, value_withdraw))
        elif(option == 3):
            print(ContaController.extract(id, accountSelected))
        elif(option == 4):
            print(ContaController.balance(id, accountSelected))

        print(msgs.welcome)
        option = int(input('Digite a opção desejada: '))
    
    print(msgs.logout_account)
