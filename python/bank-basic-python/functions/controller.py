from functions import repository
from globals import values

def depositar(value: float, balance: float) -> str:
    if(value <= 0):
        return print('O valor do depósito não pode ser negativo')
    else:
        return print(f'Depósito realizado com sucesso. Seu saldo atual é de: R${repository.depositando(value, balance)}')


def sacar(value: float, balance: float, quantity_saque: int) -> str:
    if(value > balance):
        return print('Saldo insuficiente.')
    elif(quantity_saque <= 0):
        return print('Quantidade de saques excedida')
    elif(value > 500):
        return print('Não é permitido saques maiores que R$500')
    else:
        return print(f"""
                     Saque realizado com sucesso.
                     Seu saldo atualmente é de R${repository.sacando(value, balance)}
                     Você atualmente possui {values.quantity_withdraw} saques disponíveis.
                     """)
