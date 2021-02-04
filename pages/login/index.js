import { React, useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Styled Components imports
import {
  Form,
  FormContainer,
  Login,
  Signup,
  FormFrame,
  Button,
  LoginWrapper,
  Input
} from './LoginElements'

export default function ingresar() {
  // Hooks
  const [frameOpen, setFrameOpen] = useState(true)

  return (
    <LoginWrapper>
      <Head>
        <title>Ingresar - AztecMUN 2021</title>
      </Head>

      <Form>
        <FormContainer>
          <FormFrame frameOpen={frameOpen} />

          <Signup frameOpen={frameOpen}>
            <h1>Crear Cuenta</h1> <br />
            <Input>
              <p></p>
              <input
                name="name"
                type="text"
                required
              />
            </Input>

            <Input>
              Correo Electrónico
              <input
                name="email"
                type="email"
                required
              />
            </Input>

            <Input>
              Contraseña
              <input
                name="password"
                type="password"
                required
              />
            </Input>

            <Button>Crear</Button>
            <p>
              ¿Ya tienes cuenta?
              <span onClick={() => { setFrameOpen(!frameOpen) }}>
                ¡Inicia Sesión!
              </span>
            </p>
          </Signup>

          <Login frameOpen={frameOpen}>
            <h1>Inicia Sesión</h1> <br />
            <Input>
              Correo Electrónico
              <input
                name="email"
                type="email"
                required
              />
            </Input>

            <Input>
              Contraseña
              <input
                name="password"
                type="password"
                required
              />
            </Input>

            <Button>Iniciar Sesión</Button>
            <p>
              ¿Aún no tienes cuenta?{' '}
              <span onClick={() => { setFrameOpen(!frameOpen) }}>
                ¡Crea Una!
              </span>
            </p>
          </Login>
        </FormContainer>
      </Form>
    </LoginWrapper>
  )
}