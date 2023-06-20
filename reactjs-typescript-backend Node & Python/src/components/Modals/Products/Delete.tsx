import { Typography } from "@mui/material"
import '../styles/styles.css'
import ButtonComp from "../../Button/ButtonComp";
import { DeleteProductResource } from "../../../resources";
import { useState } from "react";
import { IUpdateUser } from "../types/IUpdateUser";

const DeleteProduct = ({ idUser }: IUpdateUser) => {

    const [del, setDel] = useState(false)

    return (
        <>
            {del &&
                <DeleteProductResource
                    idUser={idUser.id}
                />
            }
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Deletar Produto
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Tem certeza que deseja deletar o produto {idUser.product}?
            </Typography>
            <ButtonComp
                variant='contained'
                title='Deletar'
                onClick={() => setDel(true)}
            />

        </>
    )
}

export default DeleteProduct