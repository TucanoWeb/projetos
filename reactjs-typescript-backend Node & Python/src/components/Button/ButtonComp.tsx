import { IButtonComp } from "./IButtonComp"

import { Button } from "@mui/material"

const ButtonComp = ({ title, variant, color, onClick, type }: IButtonComp) => {
    return (
        <>
            <Button
                variant={variant as any}
                onClick={onClick}
                color={color}
                type={type}
            >{title}</Button>
        </>
    )
}

export default ButtonComp