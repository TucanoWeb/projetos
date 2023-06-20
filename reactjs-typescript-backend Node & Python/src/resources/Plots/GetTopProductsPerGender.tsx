import axios from "axios"
import { useEffect } from 'react';

interface PropsValue {
    setRowsF: React.Dispatch<any>
    setRowsM: React.Dispatch<any>

}


const GetTopProductsPerGender = ({ setRowsF, setRowsM }: PropsValue) => {


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_API_ANALITYCS}/produtos/top/gender`,)
            .then((response) => {
                //console.log(response.data[0]['data'])
                //console.log(response.data[1]['data'])

                setRowsF(response.data[0]['data'])
                setRowsM(response.data[1]['data'])
            })

            .catch((error) => {
                console.log("Erro na listagem", error)
            })

    }, [])

    return (
        <></>
    )

}

export default GetTopProductsPerGender