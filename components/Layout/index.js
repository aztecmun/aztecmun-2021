// React imports
import React from 'react'

// Local Components imports
import Navbar from 'components/Layout/Navbar'
import Footer from 'components/Layout/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
