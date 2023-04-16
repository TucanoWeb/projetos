"""
DocString.

"""

from models.db import Engine
from models.msgs import msg
from models.forms.clienteRegister import ClienteRegister
from models.forms.contaRegister import ContaRegister
from models.forms.listarDados import ListarDadosCliente
from models.forms.relatorio import RelatorioRegister
from services.api.Auth import dbMongoKey

# Estabelece conexão com banco de dados
conn: Engine = Engine.connection()


if dbMongoKey.KEY == '0':
    print(msg.change_key_dbmongo)
else:
    print(msg.initial)
    print(msg.menu)

    opcao: int = int(input('Digite uma opção: '))

    while opcao != 0:
        if opcao > 4:
            print(msg.erro_menu)

        if opcao == 1:
            ClienteRegister().form_register()

        if opcao == 2:
            ContaRegister().form_register()

        if opcao == 3:
            ListarDadosCliente().listar()

        if opcao == 4:
            RelatorioRegister().form_register()

        print(msg.menu)
        opcao = int(input('Digite uma opção: '))

print(msg.good_bye)
