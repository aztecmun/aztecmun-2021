// React and Next imports
import { React, useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import LoadingSpinner from 'components/LoadingSpinner'

// Styled Components imports
import {
  Form,
  FormContainer,
  Login,
  Signup,
  FormFrame,
  Button,
} from './LoginElements'

// import firebase auth client
import {
  createAccountWithEmail,
  loginWithEmailAndPass,
  onAuthStateChanged,
} from 'firebase/authClient'

export default function ingresar() {
  // Hooks
  const [frameOpen, setFrameOpen] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
  })
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user && router.replace('/users/profile')
  }, [user])

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSignUp = (event) => {
    event.preventDefault()
    createAccountWithEmail(data.email, data.password, data.name)
      .then(setUser)
      .catch((error) => {
        console.error(error)
      })
  }

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(data)
    loginWithEmailAndPass(data.email, data.password)
      .then(setUser)
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      {user === undefined && <LoadingSpinner />}

      {user === null && (
        <Form>
          <Head>
            <title>Ingresar - AztecMUN 2021</title>
          </Head>
          <FormContainer>
            <FormFrame frameOpen={frameOpen} />

            <Signup frameOpen={frameOpen}>
              <h1>Crear Cuenta</h1>
              <input
                name="name"
                type="text"
                placeholder="Nombre completo"
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
      )}
    </>
  )
}
