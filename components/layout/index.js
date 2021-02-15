//React and Next imports
import React from 'react'

//Local components import
import Sidebar from '../sidebar'

//Styles
import { LayoutWrapper } from './layoutElements'
import { colors } from '../theme'
import { ThemeProvider } from 'styled-components'


export default function index({ children }) {
  return (
    <ThemeProvider theme={colors}>
      <LayoutWrapper>
        {children}
        <Sidebar />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
