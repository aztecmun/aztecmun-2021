// React and Next imports
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Styled Components imports
import {
  Form,
  Button,
  FormWrapper,
  Input,
  Close,
} from 'styles/pages/formElements'

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
    <FormWrapper>
      <Head>
        <title>Crear cuenta - AztecMUN 2021</title>
      </Head>

      {user === USER_STATES.NOT_LOGGED && (
        <Form onSubmit={handleSubmit}>
          <Link href="/">
            <Close />
          </Link>

          <h1>Crear Cuenta</h1>
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
          <Button>Crear cuenta</Button>
          <p>
            ¿Ya tienes cuenta?
            <span>
              <Link href="/login"> ¡Inicia Sesión! </Link>
            </span>
          </p>
        </Form>
      )}
    </FormWrapper>
  )
}
