import { IButton } from './types'

import {
    Container
} from './styleButoon'

const Buttons = ({ title, onClick, valueError }: IButton) => {
    return (
        <Container>
            <button onClick={onClick}>{title}</button>
        </Container>
    )
}

export default Buttons