import { useContext, useEffect, useState } from 'react'
import Context from '../Context'

const axios = require('axios').default

const GetUsers = (props) => {

    const [dataUser, setDataUsers] = useContext(Context)
    const [error, setError] = useState(false)



    var controller = 1;
    useEffect(() => {
        if (controller === 1) {
            axios.get(`${process.env.REACT_APP_API_GITUSERS}/${props.valueInput}`)
                .then((data) => {
                    setDataUsers(data.data)
                    props.importSetShowInput(true)
                    props.importSetPullUsers(false)
                })
                .catch((error) => {
                    setError(true)
                    props.importSetPullUsers(false)
                    props.importSetMsgError(true)
                    props.importSetShowInput(true)
                })

        }
        controller++
    }, [props.valueInput])


    return (
        <>
            {!dataUser &&
                <div className='searching'>Buscando Dados...</div>
            }
            {error &&
                <div className='error'>Nada Localizado...</div>
            }
        </>
    )
}

export default GetUsers