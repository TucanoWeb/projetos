import { Typography } from "@mui/material"
import ButtonComp from "../Button/ButtonComp"
import { useState, useContext } from "react"
import { DeleteUserRes } from "../../resources"
import { RowsContext } from "../../resources/context/RowsContext"


const DeleteUser = ({ idUser }: any) => {

    const [del, setDel] = useState(false)

    const element = useContext(RowsContext)
    const user = element[idUser]

    return (
        <>
            {del &&
                <DeleteUserRes
                    idUser={user.id}
                />
            }
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Deletar usuário
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Tem certeza que deseja deletar esse usuário?
            </Typography>
            <ButtonComp
                variant='contained'
                title='Deletar'
                onClick={() => setDel(true)}
            />

        </>
    )
}

export default DeleteUser