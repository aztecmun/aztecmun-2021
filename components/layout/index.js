//React imports
import React from 'react'

//Local components imports
import Menu from '../menu'

//Styles
import { LayoutWrapper } from './layoutElements'

export default function index({ children }) {
  return (
    <LayoutWrapper>
      <Menu />
        {children}
    </LayoutWrapper>
  )
}
