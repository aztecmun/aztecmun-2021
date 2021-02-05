// React and Next imports
import React from 'react'
import Head from 'next/head'

// Styles
import {
  ProfileWrapper,
  ProfileContainer,
  ProfilePic,
  ProfileInfo,
} from './profileElements'
import { AiOutlineUser as User } from 'react-icons/ai'
import { GoLocation as Location } from 'react-icons/go'
import { FaUserAlt as About } from 'react-icons/fa'
import { BsPencil as Pencil } from 'react-icons/bs'

export default function index() {
  return (
    <ProfileWrapper>
      <Head>
        {' '}
        <title> Perfil | Aztecmun </title>{' '}
      </Head>
      <ProfileContainer>
        <ProfilePic>
          <User className="pic" />
        </ProfilePic>

        <ProfileInfo>
          <div className="top">
            <div className="name">Username</div>
            <div className="school">
              {' '}
              <Location /> School Name{' '}
            </div>
            <div className="committee">Committee</div>
          </div>

          <div className="about">
            <div className="icon">
              {' '}
              <About /> About <Pencil className="edit" />{' '}
            </div>

            <div className="contact">
              <p className="c1">Grade: </p>
              <p className="c2"> 5 </p>

              <p className="c1">Group: </p>
              <p className="c2"> 623 </p>

              <p className="c1">Age: </p>
              <p className="c2"> 16 </p>

              <p className="c1">Phone: </p>
              <p className="c2 dec">+52 55 1201 6836 </p>

              <p className="c1">Email: </p>
              <p className="c2 dec">Jhondoe@mail.com </p>
            </div>
          </div>
        </ProfileInfo>
      </ProfileContainer>
    </ProfileWrapper>
  )
}
