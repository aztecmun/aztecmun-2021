// React import
import React from 'react'

// Local Compoenents import
import Navbar from './Navbar'

// Styled Components import
import { LayoutWrapper, LayoutContainer } from './LayoutSyles'

export default function layout({ children }) {
  return (
    <LayoutWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }}
    >
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutWrapper>
  )
}
