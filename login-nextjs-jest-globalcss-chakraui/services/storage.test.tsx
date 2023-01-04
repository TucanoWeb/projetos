import { getAllLocalStorage, setItem, changeItem, testSetItem } from './storage';

describe('Verificar Armazenamento Local', () => {

    // O jest.spyOn verifica se na função chamada, no caso o objeto Storage, no atribudo prototype, foi chamado o módulo ou tem o item getItem
   

    it('Deve retornar objeto localStorage', () => {

        const getItem = jest.spyOn(Storage.prototype, 'getItem')

        getAllLocalStorage()
        expect(getItem).toHaveBeenCalledWith('teste')
    })


    it('Deve verificar se setItem foi realizado com sucesso', () => {

        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

        setItem()
        expect(mockSetItem).toHaveBeenCalledWith('teste', "{\"login\":true,\"change\":1}")
    })

    it('Deve verificar se o objeto em localStorage foi alterado', () => {

        const mockChangeItem = jest.spyOn(Storage.prototype, 'setItem')

        changeItem()
        expect(mockChangeItem).toHaveBeenCalledWith('teste', "{\"login\":true,\"change\":2}")

    })

    it('Verifica o retorno de localStorage.getItem', () => {

        const response = getAllLocalStorage()
        expect(response).toBe("{\"login\":true,\"change\":2}")

    })

    it('Verifica o retorno enviando parametros', () => {
        
        
        testSetItem('teste2', 'Sucesso')
        
        const mockResponse = jest.spyOn(Storage.prototype, 'setItem')

        expect(mockResponse).toHaveBeenCalledWith('teste2', 'Sucesso')
    })

})