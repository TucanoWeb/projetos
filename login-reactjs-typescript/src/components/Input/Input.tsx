import { Controller } from 'react-hook-form';
import { IInput } from './types';

import { 
    Container,
    InputText,
    TextError
 } from './styleInput'

const Inputs = ({ control, name, errorMessage, ...rest }: IInput) => {
    return (
        <>
        <Container>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <InputText {...field} {...rest} />}
            />
            <TextError>{errorMessage}</TextError>
        </Container>
        </>
    )
}

export default Inputs