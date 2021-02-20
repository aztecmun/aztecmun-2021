// React and Next imports
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

// Styles
import { AdminWrapper } from 'styles/pages/adminElements'
import { Close } from 'styles/pages/profileElements'

// Firebase and user hook
import { queryAllProfiles } from 'firebase/client'
import useUser, { USER_STATES } from 'hooks/useUser'

import Delegate from 'components/admin/Delegate'

export default function index() {
  const [profiles, setProfiles] = useState([])
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push('/login')
  }, [user])

  useEffect(() => {
    let unsuscribe

    if (user) {
      queryAllProfiles((newProfiles) => {
        if (newProfiles) {
          unsuscribe = setProfiles(newProfiles)
        }
      })
    }

    return () => unsuscribe && unsuscribe()
  }, [user])

  return (
    <>
      <Head>
        <title>Panel de delegados</title>
      </Head>

      <AdminWrapper>
        <Link href="/">
          <Close />
        </Link>
        <h1>Panel de Delegados</h1>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Comité</th>
                <th>Escuela</th>
                <th>Grado</th>
                <th>Grupo</th>
                <th>Edad</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profileObject) => (
                <Delegate
                  key={profileObject.profileId}
                  name={profileObject.name}
                  committee={profileObject.committee}
                  school={profileObject.school}
                  grade={profileObject.grade}
                  group={profileObject.group}
                  age={profileObject.age}
                  email={profileObject.email}
                />
              ))}
            </tbody>
          </table>
        </div>
      </AdminWrapper>
    </>
  )
}
