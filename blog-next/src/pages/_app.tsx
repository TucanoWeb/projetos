import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from '../components/Logotipo/styleLogotipo'
import { PostsContext, PostsContextProps } from '../context/posts';
import { useState } from 'react'
import { Footer, Header } from '../components';

export default function App({ Component, pageProps }: AppProps) {

  const [postsData, setPostsData] = useState('')

  return (
    <>
      <PostsContextProps.Provider value={[postsData, setPostsData] as any}>
        <PostsContext.Provider value={postsData}>
          <Container>
            <Header />
          </Container>
          <Component {...pageProps}
          />
        </PostsContext.Provider>
      </PostsContextProps.Provider>
      <Container value={'footer'}>
      <Footer />
      </Container>
    </>

  )
}
