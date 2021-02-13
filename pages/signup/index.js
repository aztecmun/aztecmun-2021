// React and Next imports
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Styled Components imports
import {
  Form,
  FormContainer,
  Signup,
  Button,
  LoginWrapper,
  Input,
  Close,
} from '../login/loginElements'

// Firebase users auth client and hook
import { createAccountWithEmail } from 'firebase/client'
import useUser, { USER_STATES } from 'hooks/useUser'

export default function signup() {
  const user = useUser()
  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    user && router.replace('/profile')
  }, [user])

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createAccountWithEmail(data.email, data.password)
  }

  return (
    <LoginWrapper>
      <Head>
        <title>Ingresar - AztecMUN 2021</title>
      </Head>

      {user === USER_STATES.NOT_LOGGED && (
        <Form>
          <FormContainer>
            <Link href="/">
              <Close>
                <div className="icon"></div>
              </Close>
            </Link>

            <Signup onSubmit={handleSubmit}>
              <h1>Crear Cuenta</h1> <br />
              <Input>
                Correo Electrónico
                <input
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                />
              </Input>
              <Input>
                Contraseña
                <input
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                />
              </Input>
              <Button>Iniciar Sesión</Button>
              <p>
                ¿Ya tienes cuenta?{' '}
                <span>
                  <Link href="/login"> ¡Inicia Sesión! </Link>
                </span>
              </p>
            </Signup>
          </FormContainer>
        </Form>
      )}
    </LoginWrapper>
  )
}
