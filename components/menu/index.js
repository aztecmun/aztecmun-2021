// React and Next imports
import React, { useState } from 'react'
import Link from 'next/link'

// Local components imports
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
            <a className="link" onClick={() => setOpen(!open)}>
              Inicio
            </a>
          </Link>
        </div>

        <div className="login">
          <Link href="/login">
            <a>
              {' '}
              <button className="button" onClick={() => setOpen(!open)}>
                Crear Cuenta
              </button>{' '}
            </a>
          </Link>

          <Link href="/login">
            <a>
              {' '}
              <button className="button ghost" onClick={() => setOpen(!open)}>
                Iniciar Sesión
              </button>{' '}
            </a>
          </Link>
        </div>

        <div className="footer">
          <a
            href="https://www.facebook.com/AZTECMUN2021/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <AiFillFacebook
              className="icons"
              onClick={() => setOpen(!open)}
            />{' '}
          </a>

          <a
            href="https://www.instagram.com/aztecmun/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <AiFillInstagram
              className="icons"
              onClick={() => setOpen(!open)}
            />{' '}
          </a>

          <a
            href="https://twitter.com/FundacionAzteca"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <AiFillTwitterSquare
              className="icons"
              onClick={() => setOpen(!open)}
            />{' '}
          </a>
        </div>
      </MenuContainer>

      <p>AztecMUN</p>
      <input type="radio" />
      <Scrollbar />
    </Nav>
  )
}
