// React and Next imports
import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <>
      <ul>
        <li>
          <Link href="/comites/unicef">
            <a>UNICEF</a>
          </Link>
        </li>
        <li>
          <Link href="/comites/senado">
            <a>Senado</a>
          </Link>
        </li>
        <li>
          <Link href="/comites/onu-mujeres">
            <a>ONU Mujeres</a>
          </Link>
        </li>
        <li>
          <Link href="/comites/interpol">
            <a>Interpol</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
