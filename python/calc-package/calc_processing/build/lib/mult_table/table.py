def mult_10(value: int)-> int:
    
    if(value <= 0):
        return "Valor deve ser maior que 0"
    
    print(f'\n Tabuada de {value}')
    
    for result in range(11):
        print(f'{value} * {result} = {value * result}')

    return print("\n Fim da execução")