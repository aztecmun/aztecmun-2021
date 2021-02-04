import React, { useState } from 'react'

export default function ejemplo() {
  const [status, setStatus] = useState('')

  const handleClick = () => {
    if (status === 'active') {
      setStatus('')
    } else {
      setStatus('active')
    }
  }

  return (
    <>
      <button onClick={handleClick}>Hola</button>

      <h1 className={status}>El status es: {status}</h1>
    </>
  )
}
