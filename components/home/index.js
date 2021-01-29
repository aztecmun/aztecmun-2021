// React and Next imports
import React, { useState, useEffect } from 'react'
import Head from 'next/head'

// Styles
import {
  HomeWrapper,
  Header,
  About,
  Committees,
  Secretaries,
  Footer,
  Nav,
  Bars,
} from './homeComponents'

export default function index() {
  // Hamburguer Menu
  const [open, setOpen] = useState(false)

  // Locomotive Scroll
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Locomotive Speeds
  const sp8 = offsetY * 1
  const sp7 = offsetY * 0.9
  const sp6 = offsetY * 0.8
  const sp5 = offsetY * 0.7
  const sp4 = offsetY * 0.6
  const sp3 = offsetY * 0.5
  const sp2 = offsetY * 0.4

  return (
    <HomeWrapper>
      <Head>
        <title>Aztecmun 2021 | Inicio</title>
      </Head>

      <div
        className="tri"
        style={{ transform: `translateX(${sp8}px) rotate(${sp2}deg)` }}
      ></div>

      <Nav open={open}>
        <Bars open={open} onClick={() => setOpen(!open)} />
        <p>AztecMUN</p>
        <input type="radio" />
      </Nav>

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

      <About>
        <div className="title">
          <h1>Un Poco De Nuestra Historia</h1>
        </div>

        <div>
          Antecedentes <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          iusto, esse dolor itaque perspiciatis exercitationem sapiente corporis
          eos. Ratione quam dolorum perspiciatis aut, dolorem quibusdam quasi
          nam veniam deleniti illum!
        </div>

        <div>
          Historia <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          laborum sapiente, ut error blanditiis placeat tempora. Doloremque odit
          recusandae corrupti officia debitis voluptas ab, reiciendis tenetur,
          veniam, maxime est.
        </div>
      </About>

      <Committees>
        <div className="title">
          <h1>Comités</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            numquam accusamus provident est! Quam iste non voluptas recusandae
            unde nisi repudiandae ullam perspiciatis error architecto. Quo velit
            amet praesentium facilis! Distinctio sequi ratione corporis
            excepturi aspernatur cum sint saepe quis, eligendi pariatur velit
            enim nam laborum doloremque molestias sapiente similique odit omnis,
            debitis itaque, iure nemo. Labore doloribus saepe assumenda!
            Blanditiis dignissimos voluptates esse labore magni deleniti cumque
            debitis, est in nobis laudantium error illum soluta aperiam ab quia
            id fuga beatae exercitationem odit, unde eligendi eius voluptate
            laboriosam? Nulla? Laboriosam magnam ipsa modi, eos quisquam
            dignissimos fugiat obcaecati ea excepturi minima et! Alias
            laudantium accusamus rerum iure dicta. Eum veritatis consectetur
            corporis fugit tempora, iste quibusdam obcaecati aperiam assumenda!
            Reprehenderit suscipit pariatur voluptate facere qui, provident
            velit perferendis in! Beatae quidem quia dolorum optio in eos, nisi
            mollitia tempora esse cupiditate aut! Molestiae facilis
            exercitationem sint, odit laudantium iste?
          </p>
          <div className="scrollable">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </Committees>

      <Secretaries>
        <span style={{ transform: `translateX(${offsetY * 0.8}px)` }}>N</span>
      </Secretaries>

      <Footer></Footer>
    </HomeWrapper>
  )
}
