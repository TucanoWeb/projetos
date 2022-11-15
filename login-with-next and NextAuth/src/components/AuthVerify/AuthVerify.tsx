import { useSession } from 'next-auth/react';
import { Container } from '../../pages/styleIndex';
import Login from '../Login/Login';


const AuthVerify = ({ children }: { children: JSX.Element }) => {

    const { data: session } = useSession()

    return (
        <>
        
            {session ? (
                { ...children }
            ) : (
                <Container>
                    <Login />
                </Container>
            )
            }
        </>

    )

}


export default AuthVerify