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
    def data(self):
        directory = self.raiz()
        dataDirectory = os.path.join(directory, 'data')
        return dataDirectory