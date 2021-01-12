// React and Next imports
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Local components
import ComitesDescrip from 'components/ComitesDescrip'
import SubMenu from 'components/SubMenu'

export default function comites() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Comités - AztecMUN 2021</title>
      </Head>

      <ComitesDescrip />
      <h1>Esta es la sección del comité: {router.query.name}</h1>

      <SubMenu />
    </>
  )
}
