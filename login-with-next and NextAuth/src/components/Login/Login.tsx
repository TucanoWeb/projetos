import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { signIn, useSession } from "next-auth/react"
import { ButtonWrapper } from "../User/styleNewUser"

import { FcGoogle } from 'react-icons/fc'
import { DescriptonLogin } from "./styleLogin"

const Register = () => {

  const { data: session } = useSession()

  //console.log(session)


  return (
    <>
    <DescriptonLogin>
      <Box maxW='32rem'>
        <Heading mb={4}>Bem Vindo(a)</Heading>
        <Text fontSize='xl'>
          Esse é um sistema de login e cadastro simplificado, desenvolvido em NextJS, integrado ao Auth-Next e Supabase.
        </Text>
        < br />
        <Text fontSize='xl'>
          Toda a aplicação está envolta pela autenticação, sem a necessidade de validações individuais de páginas ou componentes.
        </Text>
      </Box> <br />
      <ButtonWrapper>
        <Button colorScheme='teal' leftIcon={<FcGoogle />} size='lg' mt='24px' onClick={() => signIn('google')}>Fazer Login</Button>
      </ButtonWrapper>
    </DescriptonLogin>
    </>
  )
}

export default Register