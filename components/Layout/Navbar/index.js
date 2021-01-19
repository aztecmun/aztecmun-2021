// React and Next imports
import React, { useState } from 'react'

// Styled Components import
import { NavWrapper, NavMenu, NavIcon, NavLink, NavPanel } from './NavbarSyles'

export default function navbar() {
  const [open, setOpen] = useState(false)

  return (
    <NavWrapper>
      <NavMenu>
        <NavLink href="/">
          <a> AZTECMUN </a>
        </NavLink>

        <NavIcon onClick={() => setOpen(!open)} />
      </NavMenu>

      <NavPanel></NavPanel>
    </NavWrapper>
  )
}
