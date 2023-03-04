from interface.Transacao import Transacao


class Deposito(Transacao):
    def __init__(self, value: float) -> None:
        super().__init__(value)

    def registrar(self):
        pass