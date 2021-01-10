import React from 'react'
import Navbar from '../Navbar'

import { MainWrapper, MainContent } from './MainElements'

function Layout({ children }) {
  return (
    <MainWrapper
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Navbar />
      <MainContent>{children}</MainContent>
    </MainWrapper>
  )
}

export default Layout
