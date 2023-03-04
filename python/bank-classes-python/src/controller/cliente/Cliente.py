from src.interface.Transacao import Transacao
from src.controller.conta.Conta import ContaController


class ClienteController():
    
    def __init__(self, endereco: dict, contas: list = 'Nenhuma conta ainda')-> None:
        self._endereco = endereco
        self._contas = contas
    
    def realizarTransacao(self, conta: ContaController, transacao: Transacao):
        pass
    
        
        
    