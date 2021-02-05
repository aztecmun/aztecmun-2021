// React import
import React from 'react'

// Local components import
import Layout from '../components/layout'

// Global Styles import
import GlobalStyles from 'styles/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}
