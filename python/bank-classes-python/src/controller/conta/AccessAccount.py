from src.api.auth import Auth


class AccessAcount:
    
    def controller(id: str, cpf: str) -> str:
        if(id == '' or cpf == ''):
            return print('Você precisa informar todos os parâmetros')
        else:
            result = Auth().verify(id, cpf)
            return result