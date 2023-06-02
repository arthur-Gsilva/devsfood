import { Layout } from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ContextProvider } from '@/contexts/cartContext'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return(
    <ContextProvider>
        <SessionProvider session={session}>
            
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            
        </SessionProvider>
    </ContextProvider>
    
  )
}
