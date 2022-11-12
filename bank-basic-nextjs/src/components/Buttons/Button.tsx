import { IButton } from "./types"

import { Container } from './styleButton'

const Button = ({ title, onClick, variant = 'primary' }: IButton) => {

    return (
        <Container value={variant}>
            <button onClick={onClick}>{title}</button>
        </Container>
    )
}

export default Button