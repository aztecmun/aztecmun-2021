// React and Next imports
import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Styled Components imports
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavIcon } from './NavbarElements'

// firebase imports
import { onAuthStateChanged, signOut } from 'firebase/authClient'

export default function Navbar() {
  // Hooks
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  })

  return (
    <Nav>
      <Bars onClick={() => setOpen(!open)} />

      <img src="/Img/logo.png" alt="Logo de Aztecmun 2021" />

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

      {user === null && (
        <Link href="/ingresar">
          <a>
            <NavBtn>Ingresar</NavBtn>
          </a>
        </Link>
      )}

      {user && user.displayName && (
        <div>
          <h3>Hola, {user.displayName}</h3>
          <span onClick={signOut}>Salir</span>
        </div>
      )}
    </Nav>
  )
}
