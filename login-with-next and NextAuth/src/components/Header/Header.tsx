import { signOut, useSession } from "next-auth/react"
import { Container } from "./styleHeader"

const Header = () => {
    const { data: session } = useSession()

    //console.log(session)

    return (
        <Container>
            {session &&
                <>
                    Olá, {session.user?.name} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            }
        </Container>
    )
}

export default Header