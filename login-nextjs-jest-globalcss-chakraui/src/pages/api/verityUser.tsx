import { IVerifyUser } from './type';
import { UserDB, ErrorDB } from "../../../services/db"
import { Alert, AlertIcon } from '@chakra-ui/react';
import { ContainerWarning } from '../../../styles/styled';


export function dataUsertest(email: string, password: string) {

    if (email === 'admin3@test.com' && password === '123456') {
        return true

    } else {

        return false
    }

}


const VerifyUser: React.FC<IVerifyUser> = ({ value }) => {

    var errorMessage: string | null = ''

    function dataUserMap(index: number, key: number) {

        if (UserDB[key]['email'] === value.email && UserDB[key]['password'] === value.password) {
            localStorage.setItem('token', 'ativado')
            setTimeout(() => {
                window.location.reload()
            }, 2000)


        } else {

            if (UserDB[key + 1] === undefined) {
                errorMessage = ErrorDB[0]['message']
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            }

        }

    }

    return (
        <>
            <ContainerWarning>
                <>
            {UserDB.map(dataUserMap as () => void)}
            {errorMessage.length > 0 ?
                <Alert status='error'>
                    <AlertIcon />
                    Dados Incorretos
                </Alert>
                :
                <Alert status='success'>
                    <AlertIcon />
                    Login realizado com sucesso. Por favor, aguarde o carregamento da página.
                </Alert>
            }
            </>
            </ContainerWarning>

        </>
    )
}

export default VerifyUser