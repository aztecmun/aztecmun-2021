// React and Next imports
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
} from './LoginElements'

// Other components
import LoadingSpinner from 'components/LoadingSpinner'

// import firebase auth client
import { loginWithEmailAndPass, createAccountWithEmail } from 'firebase/client'
import useUser, { USER_STATES } from 'hooks/useUser'

export default function ingresar() {
  // Hooks
  const [frameOpen, setFrameOpen] = useState(true)
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
  })
  const user = useUser()
  const router = useRouter()

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
    createAccountWithEmail(data.email, data.password, data.name).catch(
      (error) => {
        console.error(error)
      }
    )
  }

  const handleLogin = (event) => {
    event.preventDefault()
    loginWithEmailAndPass(data.email, data.password).catch((error) => {
      console.error(error)
    })
  }

  return (
    <>
      <Head>
        <title>Ingresar - AztecMUN 2021</title>
      </Head>

      {user === USER_STATES.UNKNOWN && <LoadingSpinner />}

      {user === USER_STATES.NOT_LOGGED && (
        <Form>
          <FormContainer>
            <FormFrame frameOpen={frameOpen} />

            <Signup onSubmit={handleSignUp} frameOpen={frameOpen}>
              <h1>Crear Cuenta</h1>
              <input
                name="name"
                type="text"
                placeholder="Nombre completo"
                onChange={handleInputChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                onChange={handleInputChange}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleInputChange}
                required
              />

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

            <Login onSubmit={handleLogin} frameOpen={frameOpen}>
              <h1>Inicia Sesión</h1>
              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                onChange={handleInputChange}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleInputChange}
                required
              />

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
      )}
    </>
  )
}
