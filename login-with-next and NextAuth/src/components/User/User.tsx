import { ContainerNewUser } from './styleNewUser';
import { useSession } from "next-auth/react";
import { useState, useContext } from 'react';
import { ContextProps } from '../../Context/context';
import RegisteredUser from "./RegisteredUser";
import NewUser from "./NewUser";


const User = () => {
    const { data: session } = useSession()
    const [sendData, setSendData] = useState(false as object | boolean)
    const [user, setUser] = useContext(ContextProps)

    //console.log(session?.user?.email)
    //console.log(user)

    return (
        <ContainerNewUser>
            {session?.user?.email === user?.email &&
                <>
                    <RegisteredUser />

                </>
            }
            {session?.user?.email !== user?.email &&
                <>
                    <NewUser />
                </>
            }
        </ContainerNewUser>
    )
}

export default User