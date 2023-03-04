from interface.Transacao import Transacao


class Saque(Transacao):
    def __init__(self, value: float) -> None:
        super().__init__(value)

    def registrar(self):
        pass
