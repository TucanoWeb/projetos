import { dataUsertest } from "./api/verityUser";
import "@testing-library/jest-dom";
import { getAllLocalStorage } from "../../services/storage";





describe('login', () => {

    const mockAlert = jest.fn()
    console.log = mockAlert

    it('Teste login com sucesso', () => {
        const response = dataUsertest('admin3@test.com', '123456')
        expect(response).toBeTruthy()
    })

    it('Verificar erro no login', () => {
        const response = dataUsertest('login@mail.com', '123456')
        expect(response).not.toBeTruthy()

    })

})
 

//Arquivo services > storage.tsx


   

