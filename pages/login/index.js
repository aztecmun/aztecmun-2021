// React and Next imports
import { React, useState } from 'react'

// Styled Components imports
import {
  Form,
  FormContainer,
  Login,
  Signup,
  FormFrame,
  Button,
} from './LoginElements'
import Head from 'next/head'

export default function login() {
  const [frameOpen, setFrameOpen] = useState(false)

  return (
    <Form>
      <Head>
        <title>Ingresar - AztecMUN 2021</title>
      </Head>
      <FormContainer>
        <FormFrame frameOpen={frameOpen} />

        <Signup frameOpen={frameOpen}>
          <h1>Crear Cuenta</h1>
          <input name="name" type="text" placeholder="Nombre y apellido" />
          <input name="email" type="email" placeholder="Correo electrónico" />
          <input name="password" type="password" placeholder="Contraseña" />

          <Button>Crear</Button>
          <p>
            ¿Ya tienes cuenta?{' '}
            <span
              onClick={() => {
                setFrameOpen(!frameOpen)
              }}
            >
              ¡Inicia Sesión!
            </span>
          </p>
        </Signup>

        <Login frameOpen={frameOpen}>
          <h1>Inicia Sesión</h1>
          <input name="email" type="email" placeholder="Correo electrónico" />
          <input name="password" type="password" placeholder="Contraseña" />

          <Button>Iniciar Sesión</Button>
          <p>
            ¿Aún no tienes cuenta?{' '}
            <span
              onClick={() => {
                setFrameOpen(!frameOpen)
              }}
            >
              ¡Crea Una!
            </span>
          </p>
        </Login>
      </FormContainer>
    </Form>
  )
}
