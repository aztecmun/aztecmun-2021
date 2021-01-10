import React from 'react'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>AztecMun</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
