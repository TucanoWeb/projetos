from globals import values

class ListAccountsRepository:
    def __init__(self, client_id):
        self._client_id = client_id
        
    
    def listar(self):
        
        accounts: list = values.accounts
        listAccountsClient: list = []

        for i in range(len(accounts)):
            if accounts[i]['id_client'] == self._client_id:

                accounts_list: list = accounts[i]['accounts']

                print(len(accounts_list))

                for i in range(len(accounts_list)):
                    listAccountsClient.append({
                        'ID da Conta': accounts_list[i]['id_account'],
                        'Tipo': accounts_list[i]['type'],
                        'Saldo:': accounts_list[i]['balance']
                    })

                    print(f"""
========== OPÇÃO {i + 1} ==============                           
> Tipo:  {accounts_list[i]['type']}
> ID:   {accounts_list[i]['id_account']}
> Saldo: R${accounts_list[i]['balance']}
> Saques Disponíveis: {3 - accounts_list[i]['quantity_withdraw']}
==================================
                          """)

        return len(listAccountsClient)
    