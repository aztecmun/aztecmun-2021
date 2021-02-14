//React and Next imports
import React from 'react'
import { Link } from 'next/head'

//Libraries imports
import { Link as LinkSmooth } from "react-scroll";

//Styles
import { LayoutWrapper, SidebarWrapper } from './layoutElements'
import { colors } from '../theme'
import { ThemeProvider } from 'styled-components'
import { AiOutlineQuestion } from 'react-icons/ai'
import { IoPeopleOutline } from 'react-icons/io5'
import { HiUserCircle } from 'react-icons/hi'
import { TiKeyOutline } from 'react-icons/ti'
import { GiPublicSpeaker } from 'react-icons/gi'
import { TiCameraOutline } from 'react-icons/ti'


export default function index({ children }) {
  return (
    <ThemeProvider theme={colors}>
      <LayoutWrapper>
        {children}

        <SidebarWrapper>
          <ul>
            <LinkSmooth smooth={true} to="about">
              <li className="_1"> <AiOutlineQuestion /> <p className="text">Quiénes Somos</p> </li>
            </LinkSmooth>
            <LinkSmooth smooth={true} to="committees">
              <li className="_2"> <IoPeopleOutline /> <p className="text">Comités</p> </li>
            </LinkSmooth>
            <li className="_3"> <TiKeyOutline /> <p className="text">Inicia Sesión</p> </li>
            <LinkSmooth smooth={true} to="secretaries">
              <li className="_4"> <GiPublicSpeaker /> <p className="text">Secretarías</p> </li>
            </LinkSmooth>
            <LinkSmooth smooth={true} to="gallery">
              <li className="_5"> <TiCameraOutline /> <p className="text">Galería</p> </li>
            </LinkSmooth>
          </ul>
        </SidebarWrapper>

      </LayoutWrapper>
    </ThemeProvider>
  )
}
