from globals import values

def depositando(value: float, balance: float) -> float:
    values.balance = value + balance
    values.extract.append(f'Deposito: {value}. Saldo atualizado: R${values.balance}')
    return values.balance

def sacando(value: float, balance: float) -> float:
    values.balance = balance - value
    values.quantity_withdraw = values.quantity_withdraw - 1
    values.extract.append(f'Saque: {value}. Saldo atualizado: R${values.balance}')
    return values.balance

        



