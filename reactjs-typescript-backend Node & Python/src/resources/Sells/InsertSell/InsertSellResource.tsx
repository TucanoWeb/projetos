import axios from "axios"
import { useEffect } from "react"

const InsertSellResource = (props: any) => {

    const { data, spent } = props
    

    let controller = 1
    useEffect(() => {
        if (controller === 1) {


            let newData = {
                "id_clientes": data.id_clientes,
                "id_produtos": data.id_produtos,
                "spent": spent
            }

            axios.post(`${process.env.REACT_APP_BASE_URL_API_CRUD}/vendas-create`, newData)
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

export default InsertSellResource