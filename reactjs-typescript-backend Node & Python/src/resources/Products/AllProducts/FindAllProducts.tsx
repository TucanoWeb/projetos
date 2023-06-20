import axios from "axios"

interface Itypes {
    setRows: React.Dispatch<any>
}


const GetDataProducts = ({setRows}: Itypes) => {

    axios.get(`${process.env.REACT_APP_BASE_URL_API_CRUD}/produtos`)
        .then((response) => {
           // console.log(response.data['produtos'])
            setRows(response.data['produtos'])
        })

        .catch((error) => {
            console.log("Erro na listagem", error)
        })

        return (
            <></>
        )

}

export default GetDataProducts