import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

import {
  loginWhitEmailAndPass,
  createAccountWithEmail,
  onAuthStateChange,
} from '../../../firebase/client'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [frameOpen, setFrameOpen] = useState(false)
  const router = useRouter()

  // Users SignUp
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
    console.log(data)
  }

  const handleSignUp = (event) => {
    event.preventDefault()
    createAccountWithEmail(data.email, data.password, data.name).then(setUser)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    loginWhitEmailAndPass(data.email, data.password).then(setUser)
  }

  return (
    <Nav>
      <Bars onClick={() => setOpen(!open)} />

      <NavMenu open={open}>
        <NavIcon onClick={() => setOpen(!open)} />

        <NavLink onClick={() => setOpen(!open)}>
          <Link
            href=""
            as="/inicio"
            className={router.asPath === '/inicio' ? 'active' : ''}
          >
            Inicio
          </Link>
        </NavLink>

        <NavLink onClick={() => setOpen(!open)}>
          <Link href="" className={router.asPath === '' ? 'active' : ''}>
            Comites
          </Link>
        </NavLink>

        <NavLink onClick={() => setOpen(!open)}>
          <Link href="" className={router.asPath === '' ? 'active' : ''}>
            Secretarías
          </Link>
        </NavLink>
      </NavMenu>

      {user === null && (
        <NavBtn onClick={() => setFormOpen(!formOpen)}>Ingresa</NavBtn>
      )}
      {user && <h3>Hola, {user.displayName}</h3>}

      <Form formOpen={formOpen}>
        <FormContainer>
          <FormFrame frameOpen={frameOpen} />

          <Signup frameOpen={frameOpen}>
            <Icon
              frameOpen={frameOpen}
              onClick={() => setFormOpen(!formOpen)}
            />
            <h1>Crear Cuenta</h1>
            <input
              name="name"
              type="text"
              placeholder="Nombre y apellido"
              onChange={handleInputChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              onChange={handleInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleInputChange}
            />
            <Button onClick={handleSignUp}>Crear</Button>
            <p>
              ¿Ya tienes cuenta?{' '}
              <span onClick={() => setFrameOpen(!frameOpen)}>
                ¡Inicia Sesión!
              </span>
            </p>
          </Signup>

          <Login frameOpen={frameOpen}>
            <Icon
              frameOpen={frameOpen}
              onClick={() => setFormOpen(!formOpen)}
            />
            <h1>Inicia Sesión</h1>
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              onChange={handleInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleInputChange}
            />
            <Button onClick={handleLogin}>Iniciar Sesión</Button>
            <p>
              ¿Aún no tienes cuenta?{' '}
              <span onClick={() => setFrameOpen(!frameOpen)}>¡Crea Una!</span>
            </p>
          </Login>
        </FormContainer>
      </Form>
    </Nav>
  )
}

export default Navbar
