import axios from "axios"
import {  useEffect } from "react"

const EditProductResource = (props: any) => {

    const { data, idUser } = props


    let controller = 1
    useEffect(() => {
        if (controller === 1) {

            let newData = {

                "product": data.product,
                "price": data.price

            }

            axios.put(`${process.env.REACT_APP_BASE_URL_API_CRUD}/produtos-update/${idUser}`, newData)
                .then(() => {
                    window.location.reload()
                })

                .catch((error) => {
                    console.log("Erro na listagem", error)
                })
        }
        controller++
    })



    return (
        <></>
    )

}

export default EditProductResource