// React and Next imports
import React, { useState } from 'react'
import Link from 'next/link'

// Local components imports
import Scrollbar from '../scrollbar'

// Libraries imports
import { motion } from 'framer-motion'

// Styles
import { Nav, Switch } from './menuElements'

export default function index({children}) {
  const [isOn, setIsOn] = useState(false)
  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <Nav>
      <Link href="/">
        <a>AztecMUN</a>
      </Link>

      <div className="menu">
        {chidlren}

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

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}
