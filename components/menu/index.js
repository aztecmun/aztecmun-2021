// React and Next imports
import React, { useState } from 'react'
import Link from 'next/link'

// Local components imports
import Scrollbar from '../scrollbar'

//Libraries imports
import { motion } from 'framer-motion'

// Styles
import { Nav, Switch } from './menuElements'

export default function index() {
  const [isOn, setIsOn] = useState(false)
  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <Nav>
      <Link href="/">
        <a>AztecMUN</a>
      </Link>

      <div className="menu">
        <Switch data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div
            className="handle"
            layout
            transition={spring}>
          </motion.div>
        </Switch>

        <Link href="/login/signup">
          <button>Crear Cuenta</button>
        </Link>
        <Link href="/login/login">
          <button className="ghost">Inicia Sesión</button>
        </Link>

        <Scrollbar />
      </div>
    </Nav>
  )
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
}