
from src.interface.Transacao import Transacao
from datetime import datetime
import uuid


class Historico(Transacao):

    _now = datetime.now()
    _dt_string = _now.strftime("%d/%m/%Y às %H:%M:%S")

    def __init__(self) -> None:
        super().__init__()

    @classmethod
    def registrar(self, type: str, account: dict, value: float) -> None:
        account_selected: list = account['transaction']
        
        uuidGenerate = uuid.uuid1()

        account_selected.append({
            'id': uuidGenerate,
            'data': self._dt_string,
            'type': type,
            'value': value,
            'balance': account['balance']
        })

    @classmethod
    def extract(self, account: dict) -> str:
        account_selected: list = account['transaction']

        if len(account_selected) > 0:
            print("""
========== EXTRATO ==============                                             
                  """)
            for i in range(len(account_selected)):
                print(f"""          
> ID: {account_selected[i]['id']}                                    
> Data:  {account_selected[i]['data']}
> Tipo:   {account_selected[i]['type']}
> Valor: R${account_selected[i]['value']}
> Saldo: {account_selected[i]['balance']}
==================================
                          """)            
        else:
            return '\n >>> Não há movimentações para esta conta no momento.'
        
        return ''
        
