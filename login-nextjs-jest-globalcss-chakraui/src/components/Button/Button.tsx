import { Button } from "@chakra-ui/react"
import { IButtonForm } from "./types"

const ButtonForm: React.FC<IButtonForm> = ({ description, onClick, type }) => {
    return (
        <>

            <Button
                onClick={onClick}
                colorScheme='teal'
            >
                {description}
            </Button>

        </>
    )
}

export default ButtonForm