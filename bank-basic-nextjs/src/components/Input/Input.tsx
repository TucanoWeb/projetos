import { IIpunt } from './types';

import { ContextFields } from '../../Context/Context';
import { useContext } from 'react';

import {
    Container
} from './stylesInput'

const Input = ({description}: IIpunt) => {

    const [dataField, setDataField] = useContext(ContextFields)

    return (
        <Container>
        <input placeholder={description} value={dataField} onChange={(e) => setDataField(e.target.value) } />
        </Container>
    )
}

export default Input