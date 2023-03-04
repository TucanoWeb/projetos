balance: float = 0

clients_fisicos: list = [{
    'id_client': 0,
    'cpf': 0
}]

accounts: list = [{
    'id_client': 0,
    'accounts': [],
    'total_accounts': 0
    
}]

clients_juridicos: list = [{
    'agencia': '0001',
    'empresa': '',
    'nome': '',
    'cnpj': '',
    'endereco': '',    
    'accounts': [{
        'id': 0,
        'type': '',
        'saldo': 0,
        'transaction': []
        }
    ]
}]

quantity_withdraw: int = 3

extract: list = []
