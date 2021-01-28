// React and Next imports
import React, { useState, useEffect } from 'react'
import Head from 'next/head'

// Libraries imports
// import LocomotiveScroll from 'locomotive-scroll'

// Styles
import {
  HomeWrapper,
  Header,
  About,
  Committees,
  Secretaries,
  Footer,
  ScrollableCommittees,
} from './homeComponents'

export default function index() {
  // const scrollRef = React.createRef()

  // useEffect(() =>{
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true
  //   })
  // })

  scroll()

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sp8 = offsetY * 1
  const sp7 = offsetY * 0.9
  const sp6 = offsetY * 0.8
  const sp5 = offsetY * 0.7
  const sp4 = offsetY * 0.6
  const sp3 = offsetY * 0.5

  return (
    <HomeWrapper dark>
      <Head>
        <title>Aztecmun 2021 | Inicio</title>
      </Head>

      <Header>
        <div className="title">
          <h1>
            <span>
              <div style={{ transform: `translateY(${sp5}px)` }}>N</div>
              <div style={{ transform: `translateY(${sp3}px)` }}>O</div>
              <div></div>
              <div style={{ transform: `translateY(${sp4}px)` }}>B</div>
              <div style={{ transform: `translateY(${sp5}px)` }}>A</div>
              <div style={{ transform: `translateY(${sp3}px)` }}>S</div>
              <div style={{ transform: `translateY(${sp3}px)` }}>T</div>
              <div style={{ transform: `translateY(${sp4}px)` }}>A</div>
              <div></div>
              <div style={{ transform: `translateY(${sp5}px)` }}>C</div>
              <div style={{ transform: `translateY(${sp5}px)` }}>O</div>
              <div style={{ transform: `translateY(${sp4}px)` }}>N</div>
              <div></div>
            </span>
            <span>
              <div style={{ transform: `translateY(${sp7}px)` }}>H</div>
              <div style={{ transform: `translateY(${sp8}px)` }}>A</div>
              <div style={{ transform: `translateY(${sp7}px)` }}>B</div>
              <div style={{ transform: `translateY(${sp7}px)` }}>L</div>
              <div style={{ transform: `translateY(${sp5}px)` }}>A</div>
              <div style={{ transform: `translateY(${sp8}px)` }}>R</div>
              <div></div>
              <div style={{ transform: `translateY(${sp8}px)` }}>D</div>
              <div style={{ transform: `translateY(${sp6}px)` }}>E</div>
              <div></div>
              <div style={{ transform: `translateY(${sp6}px)` }}>P</div>
              <div style={{ transform: `translateY(${sp6}px)` }}>A</div>
              <div style={{ transform: `translateY(${sp6}px)` }}>Z</div>
            </span>
            <span></span>
          </h1>
        </div>

        <div className="img"></div>
      </Header>

      <About></About>

      <Committees>
        Comités
        <ScrollableCommittees>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </ScrollableCommittees>
      </Committees>

      <Secretaries>
        <span style={{ transform: `translateX(${offsetY * 0.8}px)` }}>N</span>
      </Secretaries>

      <Footer></Footer>
    </HomeWrapper>
  )
}
