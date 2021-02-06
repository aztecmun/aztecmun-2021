// React and Next imports
import React, { useState } from 'react'
import Link from 'next/link'

// Local components imports
import Scrollbar from '../scrollbar'

// Styles
import { Nav } from './menuElements'

export default function index({ children }) {

  return (
    <Nav>
      <Link href="/">
        <a>AztecMUN</a>
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