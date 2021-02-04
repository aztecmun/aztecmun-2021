// React and Next imports
import React, { useState } from 'react'
import Link from 'next/link'

//Local components imports
import Scrollbar from '../scrollbar'

// Styles
import { MenuWrapper, MenuContainer, Nav } from './menuElements'
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from 'react-icons/ai'

export default function index() {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <MenuWrapper open={open} onClick={() => setOpen(!open)}>
        <div className="bars" open={open}></div>
      </MenuWrapper>
      <MenuContainer open={open}>
        <div className="links">
          <Link href="/">
            <a className="link">Inicio</a>
          </Link>

          <Link href="/">
            <a className="link">Perfil</a>
          </Link>
        </div>

        <div className="login">
          <Link href="login">
            <a>
              {' '}
              <button className="button">Crear Cuenta</button>{' '}
            </a>
          </Link>

          <Link href="login">
            <a>
              {' '}
              <button className="button ghost">Iniciar Sesión</button>{' '}
            </a>
          </Link>
        </div>

        <div className="footer">
          <AiFillFacebook className="icons" />
          <AiFillInstagram className="icons" />
          <AiFillTwitterSquare className="icons" />
        </div>
      </MenuContainer>

      <p>AztecMUN</p>
      <input type="radio" />
      <Scrollbar />
    </Nav>
  )
}
