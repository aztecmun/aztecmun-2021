// React and Next imports
import React from 'react'
import Head from 'next/head'

// Styled Components import
import { HomeContainer } from './HomeStyles'

export default function home() {
  return (
    <HomeContainer>
      <Head>
        {' '}
        <title> Aztecmun </title>{' '}
      </Head>
      home
    </HomeContainer>
  )
}
