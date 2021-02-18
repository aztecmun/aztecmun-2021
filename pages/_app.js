// React import
import React from 'react'

// Libraries imports
import { AnimateSharedLayout } from 'framer-motion'

// Global Styles import
import GlobalStyles from 'styles/global'
import { colors } from 'components/theme'
import { ThemeProvider } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <ThemeProvider theme={colors}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimateSharedLayout>
  )
}
