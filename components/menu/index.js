// React and Next imports
import React from 'react'
import Link from 'next/link'

// Local components imports
import Scrollbar from '../scrollbar'

// Styles
import { Nav } from './menuElements'

export default function index({ children }) {

  return (
    <Nav
      initial={{ y: -50 }}
      aniamte={{ y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Link href="/">
        <a> AztecMUN <span> 2021 </span> </a>
      </Link>

      <div className="menu">
        {children}

        <Link href="/signup">
          <button>Registrarse</button>
        </Link>
        <Link href="/login">
          <button className="ghost">Inicia Sesión</button>
        </Link>

        <Scrollbar />
      </div>
    </Nav>
  )
}