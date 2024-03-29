import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { INewUser } from './types';

import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, Badge, Box, Button, Flex, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Description, HeaderForm, TitleCard, LeftAddon, NameLastName, LastName, ButtonWrapper, ButtonCard, Icon, Alerts } from './styleNewUser';
import { signOut, useSession } from "next-auth/react";
import { useState, useContext } from 'react';
import { ContextProps } from '../../Context/context';
import UpdateUser from '../../services/supabase/UpdateUser';


const schema = yup.object({
    telephone: yup.string().required(() => {
        return (
            <>
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Telefone</AlertTitle>
                    <AlertDescription>é um campo obrigatório.</AlertDescription>
                </Alert>
            </>
        )
    }),
    profissao: yup.string().required(() => {
        return (
            <>
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Profissão</AlertTitle>
                    <AlertDescription>é um campo obrigatório.</AlertDescription>
                </Alert>
            </>
        )
    }),
}).required();

const RegisteredUser = () => {
    const { data: session } = useSession()

    const fullName = session?.user?.name
    const splitName: any = fullName?.split(' ')
    const image = session?.user?.image

    const [sendData, setSendData] = useState(false as any)
    const [user, setUser] = useContext(ContextProps)

    const { register, handleSubmit, formState: { errors } } = useForm<INewUser>({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: splitName[0],
            lastName: splitName[1],
            email: session?.user?.email,
            profissao: user.profissao,
            telephone: user.telephone

        }
    });
    const onSubmit = (data: object) => {
        //console.log(data)
        setSendData(data)
    };


    //console.log(session?.user?.email)
    //console.log(user)

    return (
        <>
            <Alert status='success'>
                <AlertIcon />
                Cadastro localizado em nossa base de dados
            </Alert>

            {sendData &&
                <UpdateUser values={sendData} />
            }
            <Flex>
                <HeaderForm>
                    <Avatar size='2xl' src={image as string | undefined} />
                    <Box ml='3'>
                        <Badge ml='5' colorScheme='green'>
                            Cadastrado
                        </Badge>
                        <Description>
                            <TitleCard>
                                {session?.user?.name} <br />
                            </TitleCard>
                            {user.profissao}
                            <ButtonCard>
                                <Button colorScheme='gray' size='md' onClick={() => signOut()}>
                                    <Icon><ExternalLinkIcon /></Icon> Fazer Logout
                                </Button>
                            </ButtonCard>
                        </Description>
                    </Box>
                </HeaderForm>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <NameLastName>
                    <Input placeholder="Nome" disabled={true} defaultValue={splitName[0]} {...register("firstName")} />
                    <LastName>
                        <Input placeholder="Sobrenome" disabled={true} defaultValue={splitName[1]} {...register("lastName")} />
                    </LastName>
                </NameLastName>

                <Input placeholder="Profissão" {...register("profissao")} />
                <Alerts>{errors.profissao?.message}</Alerts>

                <Input placeholder="Email" disabled={true} defaultValue={session?.user?.email as any} {...register("email")} />

                <InputGroup>
                    <LeftAddon>
                        <InputLeftAddon>+55</InputLeftAddon>
                    </LeftAddon>
                    <Input type='tel' placeholder="Telefone" {...register("telephone")} />
                </InputGroup>
                <Alerts>{errors.telephone?.message}</Alerts>

                {sendData ? (
                    <ButtonWrapper>
                        <Stack direction='row' spacing={4}>
                            <Button
                                isLoading
                                loadingText='Registrando...'
                                colorScheme='teal'
                                variant='outline'
                            >
                                Submit
                            </Button>
                        </Stack>
                    </ButtonWrapper>
                ) : (
                    <ButtonWrapper>
                        <Button colorScheme='teal' size='md' type="submit">
                            Salvar Alterações
                        </Button>
                    </ButtonWrapper>
                )}
            </form>
        </>
    )
}

export default RegisteredUser