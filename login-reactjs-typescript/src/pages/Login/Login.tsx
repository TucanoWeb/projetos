import { Buttons, Inputs } from '../../components'

import {
    Container,
    Title
} from './styleLogin'

import { Users } from '../../resource/db'

import { IData } from './types'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';
import React from 'react';

const schema = yup.object({
    email: yup.string().email('Formato inválido').required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório'),
}).required();


const Login = () => {

    const [dataUser, setDataUser] = useState({})
    const [dataError, setDataError] = useState(false)

    const { control, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            errors: ''
        }
    });
    const onSubmit = (data: IData) => {
        if (data.email === Users[0]['email'] && data.password === Users[0]['password']) {
            console.log('Login realizado')
        } else {
            console.log('Login inválido')
        }
    };

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: '',
                password: ''
            });
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <>
            <Container>
                <Title>Login</Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Inputs
                        name='email'
                        control={control}
                        placeholder='Email'
                        errorMessage={errors?.email?.message}
                    />
                    <Inputs
                        name='password'
                        type='password'
                        control={control}
                        placeholder='Senha'
                        errorMessage={errors?.password?.message}
                    />

                    <Buttons title='Entrar' type='submit' valueError={errors} />



                </form>
            </Container>
        </>
    )
}

export default Login