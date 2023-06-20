import axios from "axios"
import { useEffect } from "react"

const DeleteSellResource = ({ idUser }: any) => {


    let controller = 1
    useEffect(() => {
        if (controller === 1) {
        

    axios.delete(`${process.env.REACT_APP_BASE_URL_API_CRUD}/vendas-delete/${idUser}`)
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

export default DeleteSellResource