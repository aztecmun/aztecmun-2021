import { React, useState } from 'react'
import Link from 'next/link'

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavIcon,
  Button,
  Icon,
} from './NavbarElements'

import { Form, FormContainer, Login, Signup, FormFrame } from './FormElements'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [frameOpen, setFrameOpen] = useState(false)

  return (
    <Nav>
      <Bars onClick={() => setOpen(!open)} />

      <NavMenu open={open}>
        <NavIcon onClick={() => setOpen(!open)} />

        <NavLink>
          <Link href="">Inicio</Link>
        </NavLink>

        <NavLink>
          <Link href="">Comites</Link>
        </NavLink>

        <NavLink>
          <Link href="">Secretarías</Link>
        </NavLink>
      </NavMenu>

      <NavBtn onClick={() => setFormOpen(!formOpen)}>Ingresa</NavBtn>

      <Form formOpen={formOpen}>
        <FormContainer>
          <FormFrame frameOpen={frameOpen} />

          <Signup frameOpen={frameOpen}>
            <Icon
              frameOpen={frameOpen}
              onClick={() => setFormOpen(!formOpen)}
            />
            <h1>Crear Cuenta</h1>
            <input type="text" placeholder="Nombre de Usuario" />
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <Button>Crear</Button>
            <p>
              ¿Ya tienes cuenta?{' '}
              <span onClick={() => setFrameOpen(!frameOpen)}>
                Inicia Sesión!
              </span>
            </p>
          </Signup>

          <Login frameOpen={frameOpen}>
            <Icon
              frameOpen={frameOpen}
              onClick={() => setFormOpen(!formOpen)}
            />
            <h1>Inicia Sesión</h1>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <Button>Inicar Sesión</Button>
            <p>
              ¿Aun no tienes cuenta?{' '}
              <span onClick={() => setFrameOpen(!frameOpen)}>Crea Una!</span>
            </p>
          </Login>
        </FormContainer>
      </Form>
    </Nav>
  )
}

export default Navbar
