from src.models.db import DataBase

def test_connection_mongo(capsys):
    # Arrange (Instancia a conexão)
    conn = DataBase.connect()

    # Act (Captura o stdout (print), no bloco try no método connect da classe DataBase)
    sucess_conn = capsys.readouterr()

    # Assert (Verifica se a saída é o texto de sucesso no respectivo bloco)
    assert sucess_conn.out == "Pinged your deployment. You successfully connected to MongoDB!\n"
