import axios from 'axios'
import { useEffect, useState } from 'react'

const GetAllBanks = ({children}) => {

    const [listBanks, setListBanks] = useState([])

    const [codeOfTheBank, setCodeOfTheBank] = useState()

    const validador = listBanks[0]

    console.log(validador)

    useEffect(() => {

        axios.get('https://brasilapi.com.br/api/banks/v1').then((response) => {

            console.log(response.data)

            setListBanks(response.data)


        })

    }, [])


    // Mais abaixo, no return, leva o valor de listbanks para os componentes filhos. Verificar como foi puxado em app.js

    return (
<>
{validador === undefined ? (

    <div>Aguardando Dados</div>

)
:
(
<div>{children(listBanks)}</div>

)
}
</>


    )

}

export default GetAllBanks 