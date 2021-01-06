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
  Icon,
  Button,
  Frame,
} from './NavbarElements.js'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [frameOpen, setFrameOpen] = useState(false)

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
          <Frame
            frameOpen={frameOpen}
            onClick={() => setFrameOpen(!frameOpen)}
          ></Frame>

          <Signup>
            <Icon formOpen={formOpen} onClick={() => setFormOpen(!formOpen)} />
            <h1>Registrate</h1>
            <input type="text" placeholder="Nombre de Usuario" />
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <Button>Registrar</Button>
          </Signup>

          <Login>
            <Icon formOpen={formOpen} onClick={() => setFormOpen(!formOpen)} />
            <h1>Inicia Sesión</h1>
            <input type="text" placeholder="Usuario" />
            <input type="text" placeholder="Contraseña" />
            <Button>Inicar Sesión</Button>
          </Login>
        </FormContainer>
      </Form>
    </Nav>
  )
}

export default Navbar
