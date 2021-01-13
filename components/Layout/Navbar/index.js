// React and Next imports
import { React, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Styled Components imports
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavIcon } from './NavbarElements'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <Nav>
      <Bars onClick={() => setOpen(!open)} />

      <img src="/Img/logo.png" alt="" />

      <NavMenu open={open}>
        <NavIcon onClick={() => setOpen(!open)} />

        <NavLink onClick={() => setOpen(!open)}>
          <Link href="/">
            <a className={router.asPath === '/' ? 'active' : ''}>Inicio</a>
          </Link>
        </NavLink>

        <NavLink onClick={() => setOpen(!open)}>
          <Link href="/comites">
            <a className={router.asPath === '/comites' ? 'active' : ''}>
              Comites
            </a>
          </Link>
        </NavLink>

        <NavLink onClick={() => setOpen(!open)}>
          <Link href="/secretarias">
            <a className={router.asPath === '/secretarias' ? 'active' : ''}>
              Secretarías
            </a>
          </Link>
        </NavLink>
      </NavMenu>

      <Link href="/login">
        <a>
          <NavBtn>Ingresar</NavBtn>
        </a>
      </Link>
    </Nav>
  )
}
