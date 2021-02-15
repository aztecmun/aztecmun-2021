//React and Next imports
import React from 'react'
import Link from 'next/link'

//Libraries imports
import { Link as LinkSmooth } from 'react-scroll'

// Local styles imports
import useUser, { USER_STATES } from '../../hooks/useUser'
import { signOut } from '../../firebase/client'

//Styles
import { Sidebar } from './sidebarElements'
import { AiOutlineQuestion } from 'react-icons/ai'
import { IoPeopleOutline } from 'react-icons/io5'
import { HiUserCircle } from 'react-icons/hi'
import { TiKeyOutline, TiCameraOutline } from 'react-icons/ti'
import { GiPublicSpeaker } from 'react-icons/gi'
import { FiLogOut } from 'react-icons/fi'

export default function index() {
  const user = useUser()

  return (
    <Sidebar>
      <ul>
        <LinkSmooth smooth={true} to="about">
          <li className="_1">
            <AiOutlineQuestion /> <p className="text">Quiénes Somos</p>
          </li>
        </LinkSmooth>
        <LinkSmooth smooth={true} to="committees">
          <li className="_2">
            <IoPeopleOutline /> <p className="text">Comités</p>
          </li>
        </LinkSmooth>
        <LinkSmooth smooth={true} to="secretaries">
          <li className="_3">
            <GiPublicSpeaker /> <p className="text">Secretarías</p>
          </li>
        </LinkSmooth>
        <LinkSmooth smooth={true} to="gallery">
          <li className="_4">
            <TiCameraOutline /> <p className="text">Galería</p>
          </li>
        </LinkSmooth>
        {user === USER_STATES.NOT_LOGGED && (
          <Link href="/signup">
            <li className="_5">
              <TiKeyOutline /> <p className="text">Crear Cuenta</p>
            </li>
          </Link>
        )}
        {user && (
          <>
            <Link href="/profile">
              <li className="_5">
                <HiUserCircle /> <p className="text">Perfil</p>
              </li>
            </Link>
            <li className="_6" onClick={signOut}>
              <FiLogOut /> <p className="text"> Cerrar Sesión </p>
            </li>
          </>
        )}
      </ul>
    </Sidebar>
  )
}
