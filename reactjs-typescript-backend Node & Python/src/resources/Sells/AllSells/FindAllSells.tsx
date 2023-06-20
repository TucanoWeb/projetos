import axios from "axios"

interface Itypes {
    setRows: React.Dispatch<any>
}


const GetDataSells = ({setRows}: Itypes) => {

    axios.get(`${process.env.REACT_APP_BASE_URL_API_CRUD}/vendas`)
        .then((response) => {
           // console.log(response.data['vendas'][0])
            setRows(response.data['vendas'][0])
        })

        .catch((error) => {
            console.log("Erro na listagem", error)
        })

        return (
            <></>
        )

}

export default GetDataSells