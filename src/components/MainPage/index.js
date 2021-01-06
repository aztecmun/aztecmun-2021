import React from 'react'
import Navbar from '../Navbar'
import Head from 'next/head'

import styled from 'styled-components'

const MainWrapper = styled.div`
  height: 200vh;
  width: 100%;

  overflow: hidden;
`

function Layout() {
  return (
    <MainWrapper>
      <Head></Head>
      <Navbar />
    </MainWrapper>
  )
}

export default Layout
