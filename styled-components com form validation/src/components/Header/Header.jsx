import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./headerStyles"
import { Button } from '../index'
import Logo from '../../assets/imgs/logo.png'

const Header = ({ authenticate }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt='Logotipo' width='70px' />
                    {authenticate &&
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    }
                </Row>
                <Row>
                    {authenticate ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/104173294?v=4" />
                    )
                    : 
                    (
                        <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title='Entrar' />
                        <Button title='Cadastrar' />
                        </>
                    )
                }
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header