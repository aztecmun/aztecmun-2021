// React and Next imports
import { React, useState, useEffect } from 'react'
import Head from 'next/head'

// Styled Components imports
import {
  ProfileContainer,
  ProfileTitle,
  ProfileForm,
  ProfileInput,
} from './ProfileElements'

// Components
import { Button } from 'pages/ingresar/LoginElements'
import LoadingSpinner from 'components/LoadingSpinner'

// Firebase and user auth
import useUser, { USER_STATES } from 'hooks/useUser'
import { queryUserProfile, updateUserProfile } from 'firebase/client'

export default function profile() {
  const user = useUser()
  // const router = useRouter()

  const [profileData, setProfileData] = useState({
    profileId: '',
    name: '',
    age: '',
    school: '',
    grade: '',
    group: '',
  })

  useEffect(() => {
    let unsuscribe

    if (user) {
      queryUserProfile(user.uid, (profile) => {
        if (profile) {
          unsuscribe = setProfileData({
            ...profileData,
            profileId: profile.profileId,
            name: profile.name,
            age: profile.age,
            school: profile.school,
            grade: profile.grade,
            group: profile.group,
          })
        }
      })
    }

    return () => unsuscribe && unsuscribe()
  }, [user])

  const handleInputChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateUserProfile({
      profileId: profileData.profileId,
      name: user.displayName,
      age: profileData.age,
      school: profileData.school,
      grade: profileData.grade,
      group: profileData.group,
    })
      .then(alert('Perfil actualizado con éxito'))
      .catch((error) => console.error(error))
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      {user === USER_STATES.UNKNOWN && <LoadingSpinner />}

      {user && (
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
      )}
    </>
  )
}
