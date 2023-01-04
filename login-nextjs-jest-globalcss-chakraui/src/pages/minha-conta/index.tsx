import Login from "../../components/Login/Login"
import { useEffect, useState } from 'react';
import { ContainerBody, ContainerWarning } from '../../../styles/styled';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const MinhaConta = () => {

    const [token, setToken] = useState<string | null>('')

    useEffect(() => {

        setToken(localStorage.getItem('token'))

    }, [])


    return (
        <>
            {token !== 'ativado' ?
                (
                    <Login />
                )
                :
                (
                    <ContainerBody>
                        <ContainerWarning>
                        <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Login realizado com sucesso!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                Parabéns, você acessou com sucesso sua conta.
                            </AlertDescription>
                        </Alert>
                        </ContainerWarning>

                    </ContainerBody>
                )


            }
        </>
    )
}

export default MinhaConta