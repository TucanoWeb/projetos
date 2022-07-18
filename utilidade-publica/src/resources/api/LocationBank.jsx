import axios from 'axios'
import { useEffect } from 'react'


const LocationBank = (props) => {



useEffect(() => {

    axios.get(`https://brasilapi.com.br/api/banks/v1/${props.valueCode}`).then((response) => {


    console.log(response.data)

    props.exportSetDataBank(response.data)
    props.exportSetStatusError(false)

    })

    .catch(function (error) {
        console.log(error)
        props.exportSetStatusError(true)
    })


}, [props.valueCode])



return (

    <>
    </>
)



}

export default LocationBank