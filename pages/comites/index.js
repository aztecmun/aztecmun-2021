// React and Next imports
import React from 'react'
import Head from 'next/head'

// Local components
import ComitesDescrip from 'components/ComitesDescrip'
import SubMenu from 'components/SubMenu'

export default function comites() {
  return (
    <>
      <Head>
        <title>Comités - AztecMUN 2021</title>
      </Head>

      <ComitesDescrip />
      <br />
      <br />

      <SubMenu />
    </>
  )
}
