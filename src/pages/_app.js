import React from 'react'
import Head from 'next/head'

import Layout from '../components/MainPage'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>AztecMun</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
