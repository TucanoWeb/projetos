import { Typography } from "@mui/material"
import '../styles/styles.css'
import ButtonComp from "../../Button/ButtonComp";
import { DeleteSellResource } from "../../../resources";
import { useState } from "react";
import { IUpdateUser } from "../types/IUpdateUser";

const DeleteSell = ({ idUser }: IUpdateUser) => {

    const [del, setDel] = useState(false)

    return (
        <>
            {del &&
                <DeleteSellResource
                    idUser={idUser.id}
                />
            }
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Deletar Venda
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Tem certeza que deseja deletar a venda {idUser.id}?
            </Typography>
            <ButtonComp
                variant='contained'
                title='Deletar'
                onClick={() => setDel(true)}
            />

        </>
    )
}

export default DeleteSell