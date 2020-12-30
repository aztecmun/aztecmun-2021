import React from 'react'

import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  Container,
  Nav,
  Content,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Footer,
} from './styles'

function Layout({ children }) {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>AztecMun</title>
      </Head>

      <Nav>
        <NavLink>
          <h1>AztecMun</h1>
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink className={router.asPath === '/' ? 'active' : ''}>
            <Link href="/">Inicio</Link>
          </NavLink>

          <NavLink className={router.asPath === '/comites' ? 'active' : ''}>
            <Link href="/comites">Comites</Link>
          </NavLink>

          <NavLink className={router.asPath === '/secretarias' ? 'active' : ''}>
            <Link href="/secretarias">Secretarías</Link>
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink>
            <Link href="/login">Ingresa</Link>
          </NavBtnLink>
        </NavBtn>
      </Nav>

      <Content> {children} </Content>

      <Footer></Footer>
    </Container>
  )
}

export default Layout
