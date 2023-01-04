import { Alert, AlertIcon } from '@chakra-ui/react'
import { ContainerBody, ContainerWarning } from '../../styles/styled'

export default function Home() {
  return (
    <>
      <ContainerBody>
        <ContainerWarning>
        <Alert 
        status='warning'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        >
          <AlertIcon />
          Clique em Minha Conta para simular o login ou acessar sua conta, caso já o tenha feito
        </Alert>
        </ContainerWarning>
      </ContainerBody>
    </>
  )
}
