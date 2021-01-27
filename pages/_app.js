// React import
import React from 'react'

// Global Styles import
import GlobalStyles from 'styles/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
