// React import
import React from 'react'

import GlobalStyles from 'styles/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
