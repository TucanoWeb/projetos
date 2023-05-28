def sum_all(initial: float, final: float) -> float:
    result: float = 0
    arrValues: list = []
    
    if(final < initial):
        return print("Erro: O valor final deve ser maior que o valor inicial")
    
    difference: float = final - initial
    arrValues.append(initial)
    value: float = 0
    
    for i in range(difference):
        
        if (value == 0):
            value = initial
        
        value = value + 1
        arrValues.append(value)
        
    for i in range(len(arrValues)):
        result = result + arrValues[i]
    
    return result