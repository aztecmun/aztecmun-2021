import React  from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Styled Components imports
import {
  Form,
  FormContainer,
  Login,
  Button,
  LoginWrapper,
  Input,
  Close,
} from './loginElements'

export default function login() {

  return (
    <LoginWrapper>
      <Head>
        <title>Ingresar - AztecMUN 2021</title>
      </Head>

      <Form>
        <FormContainer>
          <Link href="/">
            <Close>
              <div className="icon"></div>
            </Close>
          </Link>

          <Login>
            <h1>Inicia Sesión</h1> <br />
            <Input>
              Correo Electrónico
              <input name="email" type="email" required />
            </Input>
            <Input>
              Contraseña
              <input name="password" type="password" required />
            </Input>
            <Button>Iniciar Sesión</Button>
            <p>
              ¿Aún no tienes cuenta?{' '}
              <span>
                <Link href="signup"> ¡Crea Una! </Link>
              </span>
            </p>
          </Login>
        </FormContainer>
      </Form>
    </LoginWrapper>
  )
}
