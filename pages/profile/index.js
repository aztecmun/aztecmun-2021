//React and Next imports
import React from 'react'
import Head from 'next/head'

//Styles
import { ProfileWrapper, ProfileContainer, ProfilePic, ProfileInfo } from './profileElements'
import { AiOutlineUser as User } from 'react-icons/ai'
import { GoLocation as Location } from 'react-icons/go'

export default function index() {
  return (
    <ProfileWrapper>
      <Head> <title> Perfil | Aztecmun </title> </Head>
      <ProfileContainer>
        <ProfilePic>
          <User className="pic" />
        </ProfilePic>

        <ProfileInfo>
          <div className="top">
            <div className="name">Username</div>
            <div className="school"> <Location /> School Name </div>
            <div className="committee">Committee</div>
          </div>
        </ProfileInfo>
      </ProfileContainer>
    </ProfileWrapper>
  )
}
