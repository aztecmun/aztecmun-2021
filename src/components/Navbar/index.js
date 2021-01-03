import { React, useState } from 'react'
import Link from 'next/link'

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  Form,
  FormContainer,
  Login,
  Signup,
 Icon } from './NavbarElementsjs'


function Navbar() {
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  return (
    <Nav>
      <Bars open={open} onClick={() => setOpen(!open)} />

      <NavMenu open={open} onClick={() => setOpen(!open)}>
        <NavLink>
          <Link href="#">Inicio</Link>
        </NavLink>

        <NavLink>
          <Link href="/comites">Comites</Link>
        </NavLink>

        <NavLink>
          <Link href="/secretarias">Secretarías</Link>
        </NavLink>
      </NavMenu>

      <NavBtn formOpen={formOpen} onClick={() => setFormOpen(!formOpen)}>
        Ingresa
      </NavBtn>

      <Form formOpen={formOpen}>
        <FormContainer>
          <Signup>
            <Icon formOpen={formOpen} onClick={() => setFormOpen(!formOpen)} />
            <h1>Registrate</h1>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </Signup>

          <Login>
            <h1>Inicia Sesión</h1>
            <input type="text" />
            <input type="text" />
          </Login>
        </FormContainer>
      </Form>
    </Nav>
  )
}

export default Navbar
