// React and Next imports
import React, { useState } from 'react'
import Link from 'next/link'

// Local components imports
import Scrollbar from '../scrollbar'

// Styles
import { Nav, User, UserIcon, UserDrop, UserMenu, UserOptions, Option, Line, MenuWrapper } from './menuElements'

// Firebase users auth client and hook
import useUser, { USER_STATES } from 'hooks/useUser'
import { signOut } from 'firebase/client'

export default function index({ children }) {
  const user = useUser()

  const [userOpen, setUserOpen] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <Link href="/">
        <a className="title"> AztecMUN <span> 2021 </span> </a>
      </Link>

      <div className="menu">
        {children}

        {user === USER_STATES.NOT_LOGGED && (
          <div className="hamburguer" onClick={() => setOpen(!open)}>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
          </div>
        )}

        {user === USER_STATES.NOT_LOGGED && (
          <MenuWrapper open={open}>
            <Link href="/signup">
              <button onClick={() => setOpen(!open)}>Registrarse</button>
            </Link>

            <Link href="/login">
              <button className="ghost" onClick={() => setOpen(!open)}>Inicia Sesión</button>
            </Link>
          </MenuWrapper>
        )}

        {user && (
          <User>
            <UserIcon />
            <UserDrop onClick={() => setUserOpen(!userOpen)} />
            <UserMenu userOpen={userOpen}>
              <UserOptions>
                <Link href="/profile">
                  <Option onClick={() => setUserOpen(!userOpen)}>
                    <a>Perfil</a>
                  </Option>
                </Link>

                <Line />

                <Option onClick={signOut}>Cerrar Sesión</Option>
              </UserOptions>
            </UserMenu>
          </User>
        )}

        <Scrollbar />
      </div>
    </Nav>
  )
}
