from abc import ABC, abstractclassmethod

class Transacao(ABC):
    pass

    @abstractclassmethod
    def registrar(self) -> None:
        pass




