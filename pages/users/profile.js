// React and Next imports
import React from 'react'
import Head from 'next/head'

// Styled Components imports
import {
  ProfileContainer,
  ProfileTitle,
  ProfileForm,
  ProfileInput,
} from './ProfileElements'

export default function profile() {
  return (
    <>
      <Head>
        <title>Profile - AztecMun 2021</title>
      </Head>

      <ProfileContainer>
        <ProfileTitle>¡Bienvenido!</ProfileTitle>
        <p>Completa tu perfil ahora :)</p>

        <ProfileForm>
          <ProfileInput>
            {' '}
            <p>Edad</p> <input type="number" />{' '}
          </ProfileInput>
          <ProfileInput>
            {' '}
            <p>Escuela</p> <input type="text" />{' '}
          </ProfileInput>
          <ProfileInput>
            {' '}
            <p>Grado</p> <input type="text" />{' '}
          </ProfileInput>
          <ProfileInput>
            {' '}
            <p>Grupo</p> <input type="text" />{' '}
          </ProfileInput>
        </ProfileForm>
      </ProfileContainer>
    </>
  )
}
