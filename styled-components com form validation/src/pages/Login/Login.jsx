import { Button, Header, Input } from "../../components"

import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import {
    Column,
    Container,
    CreateAccount,
    ForgotPassword,
    Row,
    Wrapper,
    SubTitleLogin,
    Title,
    TitleLogin
} from './loginStyle'

import { useNavigate } from 'react-router-dom'


const Login = () => {
    const schema = yup.object({
        email: yup.string().email('Formato Inválido').required('Campo obrigatório'),
        password: yup.string().min(3, 'Mínimo 3 caracteres').required('Campo obrigatório'),
      }).required();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    });

    const onSubmit = data => console.log(data);
   

    const navigate = useNavigate()

    function handleClickSignIn() {

        navigate('/feed')


    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas pempresas mais desejadas.
                    </Title>

                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change...</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input control={control} errorMessage={errors?.email?.message} name='email' placeholder='email' leftIcon={<MdEmail />} />
                            <Input control={control} errorMessage={errors?.password?.message} name='password' placeholder='senha' type='password' leftIcon={<MdLock />} />
                            <Button title='Entrar' variant='secondary' type='submit'/>
                        </form>
                    </Wrapper>
                    <Row>
                        <ForgotPassword> Esqueci minha senha</ForgotPassword>
                        <CreateAccount onClick={() => {
                            navigate('/cadastro')
                        }}> Criar Conta</CreateAccount>
                    </Row>
                </Column>
            </Container>

        </>
    )
}

export default Login