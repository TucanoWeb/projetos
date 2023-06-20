import axios from "axios"
import { useContext, useEffect } from "react"
import { RowsContext } from "../../context/RowsContext"

const UpdateUser = (props: any) => {

    const { data, idUser } = props

    const element = useContext(RowsContext)
    const user = element[idUser]


    let controller = 1
    useEffect(() => {
        if (controller === 1) {

            let newData = {

                "name": data.name,
                "gender": data.gender

            }

            axios.put(`${process.env.REACT_APP_BASE_URL_API_CRUD}/clientes-update/${user.id}`, newData, {
                headers: {},
            })
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

export default UpdateUser