import axios from "axios"
import { useContext } from "react"
import { RowsContextProps } from "../../context/RowsContext"

const GetData = () => {

    const [rowsData, setRowsData] = useContext(RowsContextProps)

    axios.get(`${process.env.REACT_APP_BASE_URL_API_CRUD}/clientes`)
        .then((response) => {
            //console.log(response.data['clientes'])
            setRowsData(response.data['clientes'])
        })

        .catch((error) => {
            console.log("Erro na listagem", error)
        })

}

export default GetData