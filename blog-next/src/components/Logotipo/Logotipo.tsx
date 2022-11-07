const logotipo = '/images/logotipo.png'
import Image from "next/image"
import Link from "next/link"

import { 
    Description,
    Container
 } from './styleLogotipo'

const Logotipo = () => {
    return (
        <>
            <Image
                src={logotipo}
                width='50'
                height='50'
                alt="Logotipo"
            />
            <Description>
            <Link href="/">
                Blog TucanoWeb
            </Link>
            </Description>
        </>
    )
}

export default Logotipo