// React import
import React from 'react'

// Libraries imports
import { AnimatePresence } from 'framer-motion'

// Local Components import
import Layout from '../components/Layout'

// Global Styles import
import GlobalStyles from 'styles/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}
