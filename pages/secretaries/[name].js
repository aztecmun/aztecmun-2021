//React and Next imports
import React from 'react'
import { useRouter } from 'next/router' 
import Head from 'next/head'

//Info import


//Styles
import { SecWrapper } from './secretariesElements' 

export default function index() {
  const router = useRouter()

  return (
    <SecWrapper>
      <Head> <title> Aztecmun 2021 | Secretaría {router.query.name} </title> </Head>

      <h1> hola {router.query.name} </h1>

    </SecWrapper>
  )
}
