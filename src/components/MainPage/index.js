import React from 'react'
import Navbar from '../Navbar'

import styled from 'styled-components'

const MainWrapper = styled.div`
  height: 200vh;
  width: 100%;

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
