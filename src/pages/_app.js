import React from 'react'

import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import Layout from '../components/layout'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>AztecMun</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  )
}
