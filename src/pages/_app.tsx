import type { AppProps } from 'next/app';
import { wrapper } from '@/redux/store';
import '@/styles/globals.css';
import {SessionProvider} from "next-auth/react";

function App({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
  )
}

export default wrapper.withRedux(App);