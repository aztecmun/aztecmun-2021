// React import
import React, { useState } from 'react'

// Local components import
import Layout from '../components/layout'

// Global Styles import
import GlobalStyles from 'styles/global'

export default function MyApp({ Component, pageProps }) {
  // Theme hook
  const [theme, setTheme] = useState('dark')

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    // El ThemeProvider debe ir aquí encerrando al layout
    // y recibe como prop el theme del state que está arriba
    <Layout>
      {/* botón para cambiar el tema */}
      <button onClick={changeTheme}>Cambiar tema</button>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}
