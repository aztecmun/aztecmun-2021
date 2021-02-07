// React imports
import React, { useState } from 'react'

// Local components imports
import Menu from '../menu'

//Libraries imports
import { motion } from 'framer-motion'

// Styles
import { LayoutWrapper, Switch } from './layoutElements'
import { darkTheme, lightTheme } from '../theme'
import { ThemeProvider } from 'styled-components'

export default function index({ children }) {
  // Theme hook
  const [theme, setTheme] = useState('dark')
  const themes = {
    light: lightTheme,
    dark: darkTheme
  }

  //Toggler hook
  const [isOn, setIsOn] = useState(false)

  const changeTheme = () => {
    setIsOn(!isOn)

    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }


  return (
    <ThemeProvider theme={themes[theme]}>
      <LayoutWrapper>
        <Menu>
          <Switch data-isOn={isOn} onClick={changeTheme}>
            <div className="handle"></div>
          </Switch>
        </Menu>

        {children}

      </LayoutWrapper>
    </ThemeProvider>
  )
}