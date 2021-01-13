import React from 'react'
import Link from 'next/link'
import { Nav, NavLink, NavMenu, NavBtn, NavIcon } from './NavbarElements'

export default function Navbar() {
  return (
    <Nav>
      <NavMenu>
        <NavIcon />

        <NavLink>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </NavLink>

        <NavLink>
          <Link href="/comites">
            <a>Comites</a>
          </Link>
        </NavLink>

        <NavLink>
          <Link href="/secretarias">
            <a>Secretarías</a>
          </Link>
        </NavLink>
      </NavMenu>

      <Link href="/ingresar">
        <a>
          <NavBtn>Ingresar</NavBtn>
        </a>
      </Link>
    </Nav>
  )
}
