from src.repository.ListAccounts import ListAccountsRepository
from src.controller.conta.ContaCorrente import ContaCorrenteController
from globals import values


class ContaController:

    _accounts: list = values.accounts
    _accountSelected: dict = {}
    _balance: float = 0
    _quantity_withdraw: int = 0

    def __init__(self, tipo: int, saldo: float, numero: int, agencia: str, cliente, historico) -> None:
        self._tipo = tipo
        self._saldo = saldo
        self._numero = numero
        self._agencia = agencia
        self._cliente = cliente
        self._historico = historico

    def __str__(self) -> str:
        return self

    def novaConta(self, type: str):

            if type == 'CC':
                ContaCorrenteController(
                    values.clients_fisicos[-1]['id_client']).novaConta()
            if type == 'PP':
                return print('Conta Poupança ainda não foi habilitada')


    def selectedAccount(self, id_cliente: int, id_account: int):

        accounts: list = values.accounts

        for i in range(len(accounts)):
            if accounts[i]['id_client'] == id_cliente:
                selectedCliente: list = accounts[i]['accounts']

                for i in range(len(selectedCliente)):
                    if selectedCliente[i]['id_account'] == id_account:
                        self._accountSelected = selectedCliente[i]
                        self._balance = selectedCliente[i]['balance']
                        self._quantity_withdraw = selectedCliente[i]['quantity_withdraw']

    @classmethod
    def sacar(self, id_cliente: int,  id_account: int,  value: float) -> str:
        self.selectedAccount(self, id_cliente, id_account)

        if value > self._balance:
            return '\n>>> ERRO: Saldo insuficiente'
        elif value > 500:
            return '\n>>> ERRO: Valor acima do permitido.'
        elif self._quantity_withdraw == 3:
            return '\n>>> ERRO: Quantidade de saques excedido'
        else:
            return ContaCorrenteController.sacar(self, value, self._accountSelected)

    @classmethod
    def depositar(self, value: float, id_cliente: int,  id_account: int):
        self.selectedAccount(self, id_cliente, id_account)
        return ContaCorrenteController.depositar(self, value, self._accountSelected)

    def listarContasController(cliente_id: int) -> None:
        if cliente_id > 0:
            return ListAccountsRepository(cliente_id).listar()
        else:
            return '>>>ERRO: ID do cliente não informado.'
        

    def quantity_accounts(cliente_id) -> int:
        for i in range(len(values.accounts)):
            if values.accounts[i]['id_client'] == cliente_id:
                return len(values.accounts[i]['accounts'])
    
    @classmethod
    def extract(self, id_cliente: int,  id_account: int):
        self.selectedAccount(self, id_cliente, id_account)
        return ContaCorrenteController.extract(self, self._accountSelected)
    
    @classmethod
    def balance(self, id_cliente: int,  id_account: int):
        self.selectedAccount(self, id_cliente, id_account)
        return ContaCorrenteController.balance(self, self._accountSelected)
        
