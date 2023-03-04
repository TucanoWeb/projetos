from src.repository.Historico import Historico
from globals import values


class CCRepository:


    def __init__(self, id_cliente, newConta):
        self._id_cliente = id_cliente
        self._newConta = newConta

    def novaContaCC(self):

        if self._newConta == True:
            values.accounts.append({
                'id_client': self._id_cliente,
                'accounts': [{
                    'id_account': values.accounts[0]['total_accounts'] + 1,
                    'type': 'Conta Corrente',
                    'balance': 0,
                    'quantity_withdraw': 0,
                    'transaction': []
                }],
            })

            values.accounts[0]['total_accounts'] = values.accounts[0]['total_accounts'] + 1

            #print('Print CCRepository.novaConta', values.accounts)

        else:

            accounts: list = values.accounts

            for i in range(len(accounts)):
                if accounts[i]['id_client'] == self._id_cliente:

                    accounts_list: list = accounts[i]['accounts']

            accounts_list.append({
                'id_account': values.accounts[0]['total_accounts'] + 1,
                'type': 'Conta Corrente',
                'balance': 0,
                'quantity_withdraw': 0,
                'transaction': []


            })

            values.accounts[0]['total_accounts'] = values.accounts[0]['total_accounts'] + 1

            return print('\n SUCESSO: Conta Corrente criada com sucesso!')

    def sacar(self, value: float, account: dict) -> str:
        account['balance'] -= value
        account['quantity_withdraw'] += 1

        Historico.registrar('Saque', account, value)

        return f"\n>>> Saque realizado com sucesso! Você ainda possui {3 - account['quantity_withdraw'] } saques disponíveis para esta conta e seu saldo atualmente é {account['balance'] }"

    def depositar(self, value: float, account: dict) -> str:

        account['balance'] += value

        Historico.registrar('Depósito', account, value)

        return f"Depósito realizado com sucesso. Seu saldo atualmente é {account['balance']}"

    def balance(self, account: dict) -> str:
        return f"Seu saldo atualmente para está conta é de {account['balance']}"
