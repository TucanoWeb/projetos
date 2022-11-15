import { useSession } from 'next-auth/react';
import Login from '../Login/Login';


const AuthVerify = ({ children }: { children: JSX.Element }) => {

    const { data: session } = useSession()

    return (
        <>
        
            {session ? (
                { ...children }
            ) : (
                <div className='containerIndex'>
                    <Login />
                </div>
            )
            }
        </>

    )

}


export default AuthVerify