// React and Next imports
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function streamingComite() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Streaming - {router.query.comite}</title>
      </Head>
      <p>Streaming de {router.query.comite}</p>
    </>
  )
}
