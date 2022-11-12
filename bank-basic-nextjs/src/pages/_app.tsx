import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextFields, ContextProps } from '../Context/Context'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const [postField, setPostField] = useState('')
  const [data, setData] = useState({
    titular: '',
    saldo: 0
  })

  return (
    <>
      <ContextProps.Provider value={[data, setData]}>
        <ContextFields.Provider value={[postField, setPostField]}>
          <Component {...pageProps} />
        </ContextFields.Provider>
      </ContextProps.Provider>
    </>
  )
}
