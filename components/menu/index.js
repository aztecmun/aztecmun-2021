// React and Next imports
import React from 'react'
import Link from 'next/link'

// Local components imports
import Scrollbar from '../scrollbar'

// Styles
import { Nav } from './menuElements'

// Firebase users auth client and hook
import useUser, { USER_STATES } from 'hooks/useUser'
import { signOut } from 'firebase/client'

export default function index({ children }) {
  const user = useUser()

  return (
    <Nav>
      <Link href="/">
        <a>
          AztecMUN <span>2021</span>{' '}
        </a>
      </Link>

      <div className="menu">
        {children}

        {user === USER_STATES.NOT_LOGGED && (
          <>
            <Link href="/signup">
              <button>Registrarse</button>
            </Link>

            <Link href="/login">
              <button className="ghost">Inicia Sesión</button>
            </Link>
          </>
        )}

        {user && (
          <Link href="/login">
            <button className="ghost" onClick={signOut}>
              Cerrar sesión
            </button>
          </Link>
        )}

        <Scrollbar />
      </div>
    </Nav>
  )
}
