import { Header, Card, UserInfo } from "../../components"

import {
    Column,
    Container,
    Title,
    TitleHighLight
} from './styleFeed'


const Feed = () => {
    return (
        <>
            <Header authenticate={true}/>
            <Container>
                <Column flex='3'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex='1'>
                    <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
                    <UserInfo percentual='80' nome='TucanoWeb' image='https://avatars.githubusercontent.com/u/104173294?v=4' />
                    <UserInfo percentual='30' nome='TucanoWeb' image='https://avatars.githubusercontent.com/u/104173294?v=4' />
                    <UserInfo percentual='40' nome='TucanoWeb' image='https://avatars.githubusercontent.com/u/104173294?v=4' />
                    <UserInfo percentual='50' nome='TucanoWeb' image='https://avatars.githubusercontent.com/u/104173294?v=4' />
                    <UserInfo percentual='70' nome='TucanoWeb' image='https://avatars.githubusercontent.com/u/104173294?v=4' />
                    <UserInfo percentual='10' nome='TucanoWeb' image='https://avatars.githubusercontent.com/u/104173294?v=4' />

                </Column>
            </Container>

        </>
    )
}

export default Feed