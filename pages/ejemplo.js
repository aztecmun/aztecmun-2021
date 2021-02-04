import React, { useState } from 'react'

export default function ejemplo() {
  const [status, setStatus] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleFocus = (event) => {
    if (event.target.name === 'active') {
      setStatus({
        [event.target.name]: '',
      })
    } else {
      setStatus({
        [event.target.name]: 'active',
      })
    }
  }

  return (
    <>
      <input
        type="text"
        name="name"
        onFocus={handleFocus}
        className={status.name}
      />

      <input
        type="email"
        name="email"
        onFocus={handleFocus}
        className={status.email}
      />

      <input
        type="password"
        name="password"
        onFocus={handleFocus}
        className={status.password}
      />

      <style jsx>{`
        .active {
          outline: 0;
          border: 2px solid green;
        }
      `}</style>
    </>
  )
}
