// React imports
import React, { useState } from 'react'

// Local components imports
import Menu from '../menu'

//Libraries imports
import { motion } from 'framer-motion'

// Styles
import { LayoutWrapper, Switch } from './layoutElements'
import { ThemeProvider } from 'styled-components'

export default function index({ children }) {
  // Theme hook
  const [theme, setTheme] = useState('dark')

  //Toggler hook
  const [isOn, setIsOn] = useState(false)
  const toggleSwitch = () => setIsOn(!isOn)

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <ThemeProvider>

      <LayoutWrapper>
        <Menu>
          <Switch data-isOn={isOn} onClick={toggleSwitch} >
            <motion.div
              className="handle"
              layout
              transition={spring}
            ></motion.div>
          </Switch>
        </Menu>

        {children}
      </LayoutWrapper>
    </ThemeProvider>
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}