// React imports
import React from 'react'

// Local components imports
import Menu from '../menu'

// Styles
import { LayoutWrapper, Switch } from './layoutElements'

export default function index({ children }) {
  return (
    <LayoutWrapper>
      <Menu>
        <Switch data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div
            className="handle"
            layout
            transition={spring}
          ></motion.div>
        </Switch>
      </Menu>

      {children}
    </LayoutWrapper>
  )
}
