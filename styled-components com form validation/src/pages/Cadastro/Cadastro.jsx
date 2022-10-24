import { Header, Input, Button } from "../../components"

import {
    Column,
    Wrapper,
    Content,
    Description,
    UrlLogin,
    Icons,
    InputWrapper
} from './styleCadastro'

import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Cadastro = () => {

    const schema = yup.object({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Formato Inválido').required('Campo obrigatório'),
        password: yup.string().min(3, 'Mínimo 3 caracteres').required('Campo obrigatório'),
      }).required();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    });

    const onSubmit = data => console.log(data);



    return (
        <>
            <Header />
            <Wrapper>
                <Column>
                    <Content>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Content>
                </Column>
                <Column>
                <Content>
                        Comece agora grátis
                        <Description>
                            Crie sua conta e make the change...
                        </Description>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <InputWrapper>
                            <Input control={control} errorMessage={errors?.name?.message} name='name' placeholder='Nome completo' leftIcon={<Icons><MdAccountBox /></Icons>} />
                            <Input control={control} errorMessage={errors?.email?.message} name='email' placeholder='E-mail' leftIcon={<Icons><MdEmail /></Icons>} />
                            <Input control={control} errorMessage={errors?.password?.message} name='password' placeholder='senha' type='password' leftIcon={<Icons><MdLock /></Icons>} />
                            <Button title='Criar minha conta' variant='secondary' type='submit'/>
                           </InputWrapper>
                        </form>
                        <Description>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </Description>
                        <Description>
                           <strong>Já tenho conta.</strong><UrlLogin><strong>Fazer login</strong></UrlLogin>
                        </Description>
                    </Content>
                </Column>
            </Wrapper>
        </>
    )
}

export default Cadastro