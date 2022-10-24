
import {
    IconContainer,
    InputText,
    InputContainer,
    ErrorText
} from './styleInput'

import { Controller } from "react-hook-form";



const Input = ({ leftIcon, name, errorMessage, control, ...rest }) => {




    return (
        <>
            <InputContainer>
                {leftIcon &&
                    <IconContainer>
                        {leftIcon}
                    </IconContainer>
                }
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field} {...rest} />}
                />
            </InputContainer>
            <ErrorText>{errorMessage}</ErrorText>
        </>
    )
}

export default Input