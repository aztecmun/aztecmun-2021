// React import
import React from 'react'

import Layout from 'components/Layout'
import GlobalStyles from 'styles/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
