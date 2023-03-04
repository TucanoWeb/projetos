from models.menuAccountAcessed import menuAccount
from src.controller.conta.ContaCorrente import ContaCorrenteController
from src.controller.conta.Conta import ContaController
from models import msgs
from globals import values


def menu(id: int):

    name_user: str = values.clients_fisicos[id]['nome']

    print(
        f'\n\nBem vindo(a) {name_user}. Por favor, selecione uma das opções abaixo: ')

    print(msgs.menu_account_acess)

    numberAccounts: int = ContaController.quantity_accounts(id)
    print(f'Números de Contas localizadas: {numberAccounts}')

    option: int = int(input('Digite a opção desejada: '))

    while(option != 0):
        if(option > 3):
            print(msgs.option_error)
        elif(option == 1):
            ContaController.listarContasController(id)
            selectAccount: int = int(input('Selecione uma conta para acessar ou digite 0 para retornar: '))
            if selectAccount != 0 and selectAccount > 0 and selectAccount <= numberAccounts: menuAccount(id, selectAccount)
        elif(option == 2):
            ContaCorrenteController(id).addConta()
        elif(option == 3):
            print('>>> ERRO: Classe Poupança ainda a ser implementada.')

        print(msgs.menu_account_acess)
        numberAccounts = ContaController.quantity_accounts(id)
        print(f"Números de Contas localizadas: {numberAccounts}")
        option = int(input('Digite a opção desejada: '))

    print(msgs.logout_account)
