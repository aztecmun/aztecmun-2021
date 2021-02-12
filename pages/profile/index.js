// React and Next imports
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Swal from 'sweetalert2'

// Styles
import {
  ProfileWrapper,
  ProfileContainer,
  ProfilePic,
  ProfileInfo,
} from './profileElements'
import { AiOutlineUser as User } from 'react-icons/ai'
import { FaUserAlt as About } from 'react-icons/fa'
import { BsPencil as Pencil } from 'react-icons/bs'

// Firebase and user auth
import useUser, { USER_STATES } from 'hooks/useUser'
import { queryUserProfile, updateUserProfile } from 'firebase/client'

export default function index() {
  const user = useUser()
  const router = useRouter()

  const [profileData, setProfileData] = useState({
    profileId: '',
    name: '',
    age: '',
    school: '',
    grade: '',
    group: '',
    phone: '',
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
            age: profile.age,
            school: profile.school,
            grade: profile.grade,
            group: profile.group,
            phone: profile.phone,
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
      name: user.displayName,
      age: profileData.age,
      school: profileData.school,
      grade: profileData.grade,
      group: profileData.group,
    })
      .then(
        Swal.fire({
          icon: 'success',
          title: 'Datos guardados con éxito',
          text: '¡Ahora tu perfil está actualizado!',
        })
      )
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
          <ProfilePic>
            <User className="pic" />
          </ProfilePic>

          <ProfileInfo>
            <form onSubmit={handleSubmit}>
              <div className="top">
                <input
                  type="text"
                  className="name"
                  placeholder="Usuario"
                  onChange={handleInputChange}
                  value={user.displayName}
                />
                <input
                  type="text"
                  className="school"
                  placeholder="Escuela"
                  onChange={handleInputChange}
                  value={profileData.school}
                />
                <input
                  type="text"
                  className="committee"
                  placeholder="Comité"
                  onChange={handleInputChange}
                  value={profileData.committee}
                />
              </div>

              <div className="about">
                <div className="icon">
                  <About /> Información <Pencil className="edit" />
                </div>

                <div className="contact">
                  <p className="c1">Graddo: </p>
                  <input
                    type="text"
                    className="c2"
                    placeholder="5"
                    onChange={handleInputChange}
                    value={profileData.grade}
                  />
                  <p className="c1">Grupo: </p>
                  <input
                    type="text"
                    className="c2"
                    placeholder="623"
                    onChange={handleInputChange}
                    value={profileData.group}
                  />

                  <p className="c1">Edad: </p>
                  <input
                    type="number"
                    className="c2"
                    placeholder="18"
                    onChange={handleInputChange}
                    value={profileData.age}
                  />
                  <p className="c1">Phone: </p>
                  <input
                    type="number"
                    className="c2"
                    placeholder="+52 56 1185 1828"
                    onChange={handleInputChange}
                    value={profileData.phone}
                  />
                  <p className="c1">Email: </p>
                  <input type="mail" className="c2" placeholder="mail" />
                </div>
              </div>
            </form>
          </ProfileInfo>
        </ProfileContainer>
      )}
    </ProfileWrapper >
  )
}
