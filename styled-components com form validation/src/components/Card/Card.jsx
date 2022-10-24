import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styleCard'


const Card = () => {
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/104173294?v=4'/>
                    <div>
                        <h4>TucanoWeb</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>projeto para HTML, Javascript e CSS</h4>
                    <p>Projeto feito em js, reactjs, html e css... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card