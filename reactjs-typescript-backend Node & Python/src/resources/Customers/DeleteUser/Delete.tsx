import axios from "axios"
import { IDelete } from "./IDelete"
import { useEffect } from "react"

const DeleteUserRes = ({ idUser }: IDelete) => {


    let controller = 1
    useEffect(() => {
        if (controller === 1) {
            
    axios.delete(`${process.env.REACT_APP_BASE_URL_API_CRUD}/clientes-delete/${idUser}`)
        .then(() => {
            window.location.reload()
        })

        .catch((error) => {
            console.log("Erro", error)
        })
    }
    controller++
})

        return (
            <></>
        )
}

export default DeleteUserRes