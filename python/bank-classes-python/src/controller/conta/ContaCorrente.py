
from src.repository.Historico import Historico
from src.repository.CCRepository import CCRepository


class ContaCorrenteController:
    def __init__(self, id_cliente: int) -> None:
        self._id_cliente = id_cliente
        
    
    def novaConta(self) -> None:
        CCRepository(self._id_cliente, True).novaContaCC()
        
    def addConta(self) -> None:
        CCRepository(self._id_cliente, False).novaContaCC()
    
    def sacar(self, value: float, account: dict) -> None:
        return CCRepository.sacar(self, value, account)
        
    def depositar(self, value: float, account: dict) -> None:
        return CCRepository.depositar(self, value, account)
    
    def extract(self, account: dict)-> None:
        return Historico.extract(account)
    
    def balance(self, account: dict)-> None:
        return CCRepository.balance(self, account)