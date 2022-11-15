import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'
import AuthVerify from '../components/AuthVerify/AuthVerify'
import { ContextGetUser, ContextProps } from '../Context/context'
import { useState } from 'react';

export default function App({ Component, pageProps: {
  session, ...pageProps
} }: AppProps) {

  const [user, setUser] = useState({ data: null })
  const [getUserRequisition, setGetUserRequisition] = useState({ requisition: false })

  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <AuthVerify>
          <ContextProps.Provider value={[user, setUser]}>
            <ContextGetUser.Provider value={[getUserRequisition, setGetUserRequisition]}>
              <Component {...pageProps} />
            </ContextGetUser.Provider>
          </ContextProps.Provider>
        </AuthVerify>
      </ChakraProvider>
    </SessionProvider>
  )
}
