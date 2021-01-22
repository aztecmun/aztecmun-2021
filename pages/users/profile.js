// React and Next imports
import { React, useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Styled Components imports
import {
  ProfileContainer,
  ProfileTitle,
  ProfileForm,
  ProfileInput,
} from './ProfileElements'

import { Button } from 'pages/ingresar/LoginElements'

import useUser from 'hooks/useUser'
import { createUserProfile, queryUserProfile } from 'firebase/client'

export default function profile() {
  const user = useUser()
  const router = useRouter()

  const [profileData, setProfileData] = useState({
    profileId: '',
    name: '',
    age: '',
    school: '',
    grade: '',
    group: '',
  })

  useEffect(() => {
    user &&
      queryUserProfile(user.uid).then((profile) => {
        setProfileData({
          ...profileData,
          profileId: profile.profileId,
          name: profile.name,
          age: profile.age,
          school: profile.school,
          grade: profile.grade,
          group: profile.group,
        })
      })
  }, [user])

  const handleInputChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createUserProfile({
      userId: user.uid,
      name: user.displayName,
      age: profileData.age,
      school: profileData.school,
      grade: profileData.grade,
      group: profileData.group,
    })
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.error(error)
      })
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
              value={profileData.age}
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
              value={profileData.school}
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
              value={profileData.grade}
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
              value={profileData.group}
            />{' '}
          </ProfileInput>

          <Button>Actualizar datos</Button>
        </ProfileForm>
      </ProfileContainer>
    </>
  )
}
