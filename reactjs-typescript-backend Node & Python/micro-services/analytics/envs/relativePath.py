import os


class RelativePath():
    def __init__(self) -> None:
        pass

    @classmethod
    def raiz(self):
        direname = os.path.dirname(__file__)
        root = os.path.dirname(direname)
        return root

    @classmethod
    def ascendend(self):
        root = self.raiz()
        dir_ascendend = os.path.dirname(root)
        return dir_ascendend

    @classmethod
    # Se alterar o banco de dados para outro local, será necessário atualizar esse método
    def db(self):
        directory = self.ascendend()
        dataDirectory = os.path.join(directory, 'database')
        print(dataDirectory)
        return dataDirectory


RelativePath.db()
