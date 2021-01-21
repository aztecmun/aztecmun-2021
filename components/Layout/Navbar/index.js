// React and Next imports
import React, { useState } from 'react'

// Styled Components import
import {
  NavWrapper,
  NavMenu,
  NavIcon,
  NavLink,
  NavPanel,
  NavIconClose,
} from './NavbarSyles'

export default function navbar() {
  const [open, setOpen] = useState(false)

  return (
    <NavWrapper open={open}>
      <NavMenu open={open}>
        <NavLink href="/">
          <a> AZTECMUN </a>
        </NavLink>

        <NavIcon open={open} onClick={() => setOpen(!open)} />
        <NavIconClose open={open} onClick={() => setOpen(!open)} />
      </NavMenu>

      <NavPanel open={open}></NavPanel>
    </NavWrapper>
  )
}
