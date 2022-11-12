import { useContext } from 'react';
import { ContextProps } from '../../Context/Context';

import {
    Container,
    Values
} from './styleDatas'

const Datas = () => {

    const [data, setData] = useContext(ContextProps)


    return (
        <Container>
            <Values>
                Títular da Conta: {data.titular}
            </Values>
            <Values>
                Saldo da Conta: {data.saldo}
            </Values>
        </Container>
    )
}

export default Datas