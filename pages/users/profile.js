// React and Next imports
import { React, useState } from 'react'
import Head from 'next/head'

// Styled Components imports
import {
  ProfileContainer,
  ProfileTitle,
  ProfileForm,
  ProfileInput,
} from './ProfileElements'

import { Button } from 'pages/ingresar/LoginElements'
import useUser from 'hooks/useUser'

export default function profile() {
  useUser()

  const [data, setData] = useState({
    age: '',
    school: '',
    grade: '',
    group: '',
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      <ProfileContainer>
        <ProfileTitle>¡Bienvenido!</ProfileTitle>
        <p>Completa tu perfil ahora :)</p>

        <ProfileForm onSubmit={handleSubmit}>
          <ProfileInput>
            {' '}
            <p>Edad</p>{' '}
            <input
              name="age"
              type="number"
              onChange={handleInputChange}
              required
            />{' '}
          </ProfileInput>
          <ProfileInput>
            {' '}
            <p>Escuela</p>{' '}
            <input
              name="school"
              type="text"
              onChange={handleInputChange}
              required
            />{' '}
          </ProfileInput>
          <ProfileInput>
            {' '}
            <p>Grado</p>{' '}
            <input
              name="grade"
              type="text"
              onChange={handleInputChange}
              required
            />{' '}
          </ProfileInput>
          <ProfileInput>
            {' '}
            <p>Grupo</p>{' '}
            <input
              name="group"
              type="text"
              onChange={handleInputChange}
              required
            />{' '}
          </ProfileInput>

          <Button>Actualizar datos</Button>
        </ProfileForm>
      </ProfileContainer>
    </>
  )
}
