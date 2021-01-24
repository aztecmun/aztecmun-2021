// React imports
import React from 'react'

// Local Components imports
import Navbar from 'components/Layout/Navbar'
import Footer from 'components/Layout/Footer'

// Styled Components imports
import { LayoutWrapper } from './LayoutElements'

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
      <Footer />
    </LayoutWrapper>
  )
}
