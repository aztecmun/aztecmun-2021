// React and Next imports
import React from 'react'
import Head from 'next/head'

// Styles
import { HomeWrapper } from './homeComponents'

export default function home() {
  return (
    <HomeWrapper>
      <Head>
        {' '}
        <title>Aztecmun 2021 | Inicio</title>{' '}
      </Head>
    </HomeWrapper>
  )
}
