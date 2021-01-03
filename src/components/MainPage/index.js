import React from 'react'
import Navbar from '../Navbar'

import styled from 'styled-components'

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  overflow: hidden;
`

function Layout() {
  return (
    <MainWrapper>
      <Navbar />
    </MainWrapper>
  )
}

export default Layout
