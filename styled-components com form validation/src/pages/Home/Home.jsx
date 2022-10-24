import { Button, Header } from "../../components"

import Banner from '../../assets/imgs/banner-home.png'

import {
    Container,
    Title,
    TitleHighLight,
    TextContent
} from './homeStyle'

import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handleClickLogin = () => {

        navigate('/login')

    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente
                            <br />
                        </TitleHighLight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empreas mais inovadorea do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title='Começar Agora' variant="secondary" onClick={handleClickLogin} />


                </div>
                <div>
                    <img src={Banner} alt="Imagem principal" />
                </div>
            </Container>

        </>
    )
}

export default Home