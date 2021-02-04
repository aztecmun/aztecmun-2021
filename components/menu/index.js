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
            <a className="link" onClick={() => setOpen(!open)}>Inicio</a>
          </Link>
        </div>

        <div className="login">
          <Link href="login">
            <a>
              {' '}
              <button className="button" onClick={() => setOpen(!open)}>Crear Cuenta</button>{' '}
            </a>
          </Link>

          <Link href="login">
            <a>
              {' '}
              <button className="button ghost" onClick={() => setOpen(!open)}>Iniciar Sesión</button>{' '}
            </a>
          </Link>
        </div>

        <div className="footer">
          <Link href="https://www.facebook.com/AZTECMUN2021/">
            <a> <AiFillFacebook className="icons" onClick={() => setOpen(!open)} /> </a>
          </Link>

          <Link href="https://www.instagram.com/aztecmun/">
            <a> <AiFillInstagram className="icons" onClick={() => setOpen(!open)} /> </a>
          </Link>

          <Link href="https://twitter.com/FundacionAzteca">
            <a> <AiFillTwitterSquare className="icons" onClick={() => setOpen(!open)} /> </a>
          </Link>
        </div>
      </MenuContainer>

      <p>AztecMUN</p>
      <input type="radio" />
      <Scrollbar />
    </Nav>
  )
}
