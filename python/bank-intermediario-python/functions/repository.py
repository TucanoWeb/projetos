from globals import values

def criar_conta(nome: str, data_nascimento: str, cpf: str, endereco: dict) -> None:
    controller_id: int = values.accounts[-1]['id'] + 1
    values.accounts.append({
        'id': controller_id,
        'agencia': '0001',
        'nome': nome,
        'data_de_nascimento': data_nascimento,
        'cpf': cpf,
        'endereco': endereco
    })
    # print(values.accounts)  
  

def depositando(value: float, balance: float) -> float:
    values.balance = value + balance
    values.extract.append(f'Deposito: {value}. Saldo atualizado: R${values.balance}')
    return values.balance

def sacando(value: float, balance: float) -> float:
    values.balance = balance - value
    values.quantity_withdraw = values.quantity_withdraw - 1
    values.extract.append(f'Saque: {value}. Saldo atualizado: R${values.balance}')
    return values.balance



        



