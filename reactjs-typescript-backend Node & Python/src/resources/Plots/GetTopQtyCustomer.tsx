import axios from "axios"
import { useEffect } from 'react';

interface PropsValue {
    setRows: React.Dispatch<any>
}


const GetTopQtyCustomers = ({ setRows }: PropsValue) => {


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_API_ANALITYCS}/clientes/top/qty`,)
            .then((response) => {
                //console.log(response.data)
                setRows(response.data)
            })

            .catch((error) => {
                console.log("Erro na listagem", error)
            })

    }, [])

    return (
        <></>
    )

}

export default GetTopQtyCustomers