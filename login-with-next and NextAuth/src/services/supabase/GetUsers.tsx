import axios from 'axios'
import { useSession } from 'next-auth/react';
import React, { useContext } from 'react';
import { ContextProps, ContextGetUser } from '../../Context/context';


const GetUsers = () => {

    const { data: session } = useSession()
    const [user, setUser] = useContext(ContextProps)
    const [getUserRequisition, setGetUserRequisition] = useContext(ContextGetUser)

    //console.log(session?.user?.email)

    let controller = 1
    if (controller === 1){
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user?email=eq.${session?.user?.email}&select=*`, {
            headers: {
                apikey: process.env.NEXT_PUBLIC_SERVICE_KEY,
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SERVICE_KEY}`
            }
        })
            .then(async (response) => {
                //('Sucesso GetUser')
                await setUser(response.data[0])
                await setGetUserRequisition({requisiton: true})
            })
            .catch(async (error) => {
                //console.log('Erro GetUser')
                await setUser({
                    email: 'Não Localizado',
                    error: 'true'
                })
                await setGetUserRequisition({requisiton: true})
            })

            controller++

    }



    return (
        <>
        </>
    )
}

export default GetUsers