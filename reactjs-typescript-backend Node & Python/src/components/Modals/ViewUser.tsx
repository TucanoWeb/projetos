import { Typography } from "@mui/material"
import { IViewUser } from "./types/IViewUser"
import { useContext } from "react"
import { RowsContext } from "../../resources/context/RowsContext"


const ViewUser = ({ idUser }: IViewUser) => {

    const element = useContext(RowsContext)
    const user = element[idUser]


    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {user.nome}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Nome : {user.nome}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Email : {user.email ? user.email : "Sem email Cadastrado"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <strong>Basta duplicar esse bloco mapeando os atributos do respectivo objeto.</strong>
            </Typography>
        </>
    )
}

export default ViewUser