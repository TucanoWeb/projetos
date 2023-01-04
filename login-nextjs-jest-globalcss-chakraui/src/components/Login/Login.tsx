import { ContainerBody, ContainerButton, ContainerWarning } from "../../../styles/styled"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Input } from "@chakra-ui/react";
import { ILogin } from "./type";
import { useState } from 'react';
import VerifyUser from "../../pages/api/verityUser";

const schema = yup.object({
    email: yup.string().email('Email Inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
}).required();


const Login = () => {

    const { register, reset, watch, handleSubmit, formState: { errors } } = useForm<ILogin>({
        resolver: yupResolver(schema)
    });

    const test = watch('email')

    const [dataForm, setDataForm] = useState(false)


    const onSubmit = (data: any, e: any) => {
        reset()
        setDataForm(data)
        console.log(data)
    };

    return (
        <>
            <ContainerBody>
                <>
                    <ContainerWarning>
                        <Alert
                            status='info'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Dados de Acesso!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                <strong>email:</strong> admin3@test.com <br />
                                <strong>password:</strong> 123456
                            </AlertDescription>
                        </Alert>
                    </ContainerWarning>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("email")} name='email'
                            data-testid="email"
                        />
                        <p>{errors.email?.message}</p>

                        <Input
                            {...register("password")}
                            type='password'
                            data-testid="password"
                        />
                        <p>{errors.password?.message}</p>

                        <ContainerButton>
                           
                            {dataForm !== false ? (
                                <Button
                                isLoading
                                loadingText='Verificando'
                                colorScheme='teal'
                                variant='outline'
                                >
                                    Enviar
                                </Button>
                            ) : (
                                <Button
                                colorScheme='teal'
                                type="submit"
                                data-testid="enviar">
                                Entrar
                            </Button>
                            )
                            }
                        </ContainerButton>
                    </form>

                    {dataForm !== false &&
                        <>
                            <VerifyUser
                                value={dataForm}
                            />

                        </>
                    }
                </>
            </ContainerBody>
        </>
    )
}

export default Login