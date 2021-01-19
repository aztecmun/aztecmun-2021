// React import
import React from 'react'

// Local Components import
import Layout from '../components/Layout'

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
