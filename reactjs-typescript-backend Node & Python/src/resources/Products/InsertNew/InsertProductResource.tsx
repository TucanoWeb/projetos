import axios from "axios"
import { useEffect } from "react"

const InsertProductResource = (props: any) => {

    const { data } = props

    let controller = 1
    useEffect(() => {
        if (controller === 1) {

            let newData = {
                "product": data.product,
                "price": data.price,
            }

            axios.post(`${process.env.REACT_APP_BASE_URL_API_CRUD}/produtos-create`, newData)
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

export default InsertProductResource