import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { Footer, Header } from "../components"
import { Context } from '../context/Context';

import { customTheme } from '../../styles/global';

export default function App({ Component, pageProps }: AppProps) {


  return (
    <ChakraProvider theme={customTheme}>
      <Context>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Context>
    </ChakraProvider>
  )
}
