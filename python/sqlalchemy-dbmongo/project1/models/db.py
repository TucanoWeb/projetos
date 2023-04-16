"""
Docstring. Descreva aqui as especificidades da classe.
    """

from sqlalchemy import MetaData, create_engine


class Engine():
    def __init__(self) -> None:
        pass

    @classmethod
    def meta_data(self) -> object:
        metadata_obj: MetaData = MetaData()
        return metadata_obj

    @classmethod
    def connection(self) -> object:
        meta = self.meta_data()
        engine = create_engine('sqlite:///database.db')
        meta.create_all(engine)
        return engine
