// React import
import React from 'react'

// Local Compoenents import
import Navbar from './Navbar'

// Styled Components import
import { LayoutWrapper } from './LayoutSyles'

export default function layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  )
}
