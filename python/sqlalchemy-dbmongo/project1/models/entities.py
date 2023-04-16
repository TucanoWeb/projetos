"""
Docstring. Descreva aqui as especificidades da classe.
    """

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from models.db import Engine
from models.base import Base

meta_data = Engine.meta_data()
engine = Engine.connection()


class Cliente(Base):
    def __init__(self) -> None:
        pass

    __tablename__ = 'clientes'

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String(255))
    cpf = Column(String(255))
    endereco = Column(String(255))
    senha = Column(String(255))

    conta = relationship('Conta',
                         cascade='all, delete-orphan', back_populates='cliente')


class Conta(Base):
    def __init__(self) -> None:
        pass

    meta_data = Engine.meta_data()
    engine = Engine.connection()

    __tablename__ = 'contas'

    id = Column(Integer, primary_key=True, autoincrement=True)
    tipo = Column(String(255))
    agencia = Column(String(255))
    conta = Column(String(255))
    id_cliente = Column(Integer, ForeignKey('clientes.id'))
    saldo = Column(String(255))

    cliente = relationship('Cliente', back_populates='conta')


Base.metadata.create_all(engine)
