// React import
import React from 'react'

// Global Styles import
import GlobalStyles from 'styles/global'
import { colors } from 'components/theme'
import { ThemeProvider } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
