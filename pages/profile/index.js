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
            <input type="text" className="name" placeholder="Username" />
            <input type="text" className="school" placeholder="School" />
            <input type="text" className="committee" placeholder="Committee" />
          </div>

          <div className="about">
            <div className="icon">
              {' '}
              <About /> About <Pencil className="edit" />
            </div>

            <form>
              <div className="contact">
                <p className="c1">Grade: </p>
                <input type="text" className="c2" placeholder="5" />

                <p className="c1">Group: </p>
                <input type="text" className="c2" placeholder="623" />

                <p className="c1">Age: </p>
                <input type="text" className="c2" placeholder="18" />

                <p className="c1">Phone: </p>
                <input type="number" className="c2" placeholder="+52 56 1185 1828" />

                <p className="c1">Email: </p>
                <input type="mail" className="c2" placeholder="mail" />
              </div>
            </form>
          </div>
        </ProfileInfo>
      </ProfileContainer>
    </ProfileWrapper>
  )
}
