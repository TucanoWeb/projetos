
from globals import values


class Auth:
    @staticmethod
    def verify(id, cpf) -> bool:

        # Variáveis da classe
        accounts_fisica: list = values.clients_fisicos
        
        result: int = 0

        for i in range(len(accounts_fisica)):
            id_account: str = str(accounts_fisica[i]['id_client'])
            cpf_account: int = accounts_fisica[i]['cpf']

            if(id_account == id and cpf_account == cpf):
                result += 1
                #print('conta localizada')


        if(result == 1):
            return True
        else:
            return False
