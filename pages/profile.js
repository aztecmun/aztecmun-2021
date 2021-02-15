// React and Next imports
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Swal from 'sweetalert2'
import Link from 'next/link'

// Styles
import {
  ProfileWrapper,
  ProfileContainer,
  ProfilePic,
  ProfileInfo,
  Close,
} from 'styles/pages/profileElements'
import { Button } from 'styles/pages/loginElements'
import { AiOutlineUser as User } from 'react-icons/ai'
import { FaUserAlt as About } from 'react-icons/fa'

// Firebase and user auth
import useUser, { USER_STATES } from 'hooks/useUser'
import { queryUserProfile, updateUserProfile } from 'firebase/client'

export default function index() {
  const user = useUser()
  const router = useRouter()

  const [profileData, setProfileData] = useState({
    profileId: '',
    name: '',
    school: '',
    committee: '',
    grade: '',
    group: '',
    age: '',
    phone: '',
    email: '',
  })

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.replace('/login')
  }, [user])

  useEffect(() => {
    let unsuscribe

    if (user) {
      queryUserProfile(user.uid, (profile) => {
        if (profile) {
          unsuscribe = setProfileData({
            ...profileData,
            profileId: profile.profileId,
            name: profile.name,
            school: profile.school,
            committee: profile.committee,
            grade: profile.grade,
            group: profile.group,
            age: profile.age,
            phone: profile.phone,
            email: profile.email,
          })
        }
      })

      if (!user.emailVerified) {
        Swal.fire({
          icon: 'warning',
          title: 'Verifica tu email',
          text: 'Si no lo encuentras, revisa en el spam',
        })
      }
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
      name: profileData.name,
      school: profileData.school,
      committee: profileData.committee,
      grade: profileData.grade,
      group: profileData.group,
      age: profileData.age,
      phone: profileData.phone,
      email: profileData.email,
    })
      .then(() => {
        user.updateProfile({
          displayName: profileData.name,
        })

        Swal.fire({
          icon: 'success',
          title: 'Datos guardados con éxito',
          text: '¡Ahora tu perfil está actualizado!',
        })
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al actualizar los datos',
          text: 'Por favor intente más tarde',
        })
        console.error(error)
      })
  }

  return (
    <ProfileWrapper>
      <Head>
        {' '}
        <title> Perfil | Aztecmun </title>{' '}
      </Head>

      {user && (
        <ProfileContainer>
          <Link href="/">
            <Close />
          </Link>

          <ProfilePic>
            <User className="pic" />
          </ProfilePic>

          <ProfileInfo>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="top">
                <input
                  name="name"
                  className="name"
                  type="text"
                  placeholder="Nombre completo"
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  value={profileData.name}
                />
                <input
                  name="school"
                  className="school"
                  type="text"
                  placeholder="Escuela"
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  value={profileData.school}
                />
                <select
                  className="comittee"
                  name="committee"
                  onChange={handleInputChange}
                >
                  <option disabled selected value="">
                    Selecciona un comité
                  </option>
                  <option value="ONU Mujeres">ONU Mujeres</option>
                  <option value="Corte Internacional de Justicia">
                    Corte Internacional de Justicia
                  </option>
                  <option value="Senado de la República">
                    Senado de la República
                  </option>
                  <option value="Worl Tourism Organization">
                    World Tourism Organization
                  </option>

                  {profileData.committee !== '' && (
                    <option selected value={profileData.committee}>
                      {profileData.committee}
                    </option>
                  )}
                </select>
              </div>
              <div className="about">
                <div className="icon">
                  <About /> Información
                </div>

                <div className="contact">
                  <p className="c1">Grado: </p>
                  <input
                    name="grade"
                    className="c2"
                    type="text"
                    placeholder="Quinto semestre"
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    value={profileData.grade}
                  />
                  <p className="c1">Grupo: </p>
                  <input
                    name="group"
                    className="c2"
                    type="text"
                    placeholder="623"
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    value={profileData.group}
                  />
                  <p className="c1">Edad: </p>
                  <input
                    name="age"
                    className="c2"
                    type="number"
                    placeholder="18"
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    value={profileData.age}
                  />
                  <p className="c1">Teléfono: </p>
                  <input
                    name="phone"
                    className="c2"
                    type="number"
                    placeholder="+52 56 1185 1828"
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    value={profileData.phone}
                  />
                  <p className="c1">Email: </p>
                  <input
                    name="email"
                    className="c2"
                    type="email"
                    placeholder="mail@example.com"
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    value={profileData.email}
                  />
                </div>
              </div>
              <Button>Actualizar perfil</Button>
            </form>
          </ProfileInfo>
        </ProfileContainer>
      )}
    </ProfileWrapper>
  )
}
