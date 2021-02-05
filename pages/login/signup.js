import React  from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Styled Components imports
import {
  Form,
  FormContainer,
  Signup,
  Button,
  LoginWrapper,
  Input,
  Close,
} from './loginElements'

export default function signup() {

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

          <Signup>
            <h1>Crear Cuenta</h1> <br />

            <Input>
              Nombre
              <input name="name" type="text" required />
            </Input>
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
              ¿Ya tienes cuenta?{' '}
              <span>
                <Link href="login"> ¡Inicia Sesión! </Link>
              </span>
            </p>
          </Signup>
        </FormContainer>
      </Form>
    </LoginWrapper>
  )
}
