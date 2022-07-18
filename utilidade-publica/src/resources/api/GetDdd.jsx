import axios from "axios";
import { useEffect } from "react";

const GetDdd = (props) => {


    useEffect(() => {

        axios.get(`https://brasilapi.com.br/api/ddd/v1/${props.exportCodeDdd}`).then((response) => {

        console.log(response.data['state'])
        props.exportSetDataDddCities(response.data['cities'])
        props.exportSetDataDddState(response.data['state'])
        props.exportErrorDDD(false)

        })

        .catch(function(error) {

            console.log(error.response['data']['message'])
            props.exportErrorDDD(error.response['data']['message'])

        })

    }, [props.exportCodeDdd])

return (
    <> </>
)}

export default GetDdd