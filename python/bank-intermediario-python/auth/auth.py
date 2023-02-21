from globals import values

def verify_access(id: str, cpf: str) -> bool:
    
    accounts: list = values.accounts
    result: int = 0
    
    for i in range(len(accounts)):
        id_account: str = str(accounts[i]['id'])
        cpf_account: int = accounts[i]['cpf']
        
        if(id_account == id and cpf_account == cpf):
            result += 1

    if(result == 1):
        return True
    else:
        return False