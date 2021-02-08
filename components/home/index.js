// React and Next imports
import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

//Libraries imports 
import { AnimateSharedLayout, motion } from 'framer-motion'

// Local components imports
import ScrollContainer from '../momentumScroll/scrollContainer'
import ParallaxElement from '../momentumScroll/parallaxElement'

// Styles
import {
  HomeWrapper,
  Header,
  About,
  Committees,
  Secretaries,
  Footer
} from './homeElements'
import { BsArrowRightShort as Arrow } from 'react-icons/bs'

export default function index() {

  const l1 = useRef(null)
  const l2 = useRef(null)
  const l3 = useRef(null)
  const l4 = useRef(null)
  const l5 = useRef(null)
  const l6 = useRef(null)
  const l7 = useRef(null)
  const l8 = useRef(null)
  const l9 = useRef(null)
  const l10 = useRef(null)
  const l11 = useRef(null)
  const l12 = useRef(null)
  const l13 = useRef(null)
  const l14 = useRef(null)
  const l15 = useRef(null)
  const l16 = useRef(null)
  const l17 = useRef(null)
  const l18 = useRef(null)
  const l19 = useRef(null)
  const l20 = useRef(null)
  const l21 = useRef(null)
  const l22 = useRef(null)
  const l23 = useRef(null)
  const l24 = useRef(null)
  const l25 = useRef(null)
  const l26 = useRef(null)
  const l27 = useRef(null)
  const l28 = useRef(null)

  return (
    <>
      <ScrollContainer>
        <HomeWrapper>

          <Head>
            <title>Aztecmun 2021 | Inicio</title>
          </Head>

          <Header>
            <div className="title">
              <h1>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.ParallaxElement dataPercent="60">
                    <div ref={l1}> N </div>
                  </motion.ParallaxElement>
                  <ParallaxElement dataPercent="50">
                    <div ref={l2}> O </div>
                  </ParallaxElement>
                  <div></div>
                  <ParallaxElement dataPercent="70">
                    <div ref={l3}> B </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="30">
                    <div ref={l4}> A </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="50">
                    <div ref={l5}> S </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="40">
                    <div ref={l6}> T </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="20">
                    <div ref={l7}> A </div>
                  </ParallaxElement>
                  <div></div>
                  <ParallaxElement dataPercent="50">
                    <div ref={l8}> C </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="60">
                    <div ref={l9}> O </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="40">
                    <div ref={l10}> N </div>
                  </ParallaxElement>
                  <div></div>
                </motion.span>

                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: .3 }}
                >
                  <ParallaxElement dataPercent="60">
                    <div ref={l11}> H </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="50">
                    <div ref={l12}> A </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="30">
                    <div ref={l13}> B </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="70">
                    <div ref={l14}> L </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="40">
                    <div ref={l15}> A </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="50">
                    <div ref={l16}> R </div>
                  </ParallaxElement>
                  <div></div>
                  <ParallaxElement dataPercent="60">
                    <div ref={l17}> D </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="50">
                    <div ref={l18}> E </div>
                  </ParallaxElement>
                  <div></div>
                  <ParallaxElement dataPercent="70">
                    <div ref={l19}> P </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="60">
                    <div ref={l20}> A </div>
                  </ParallaxElement>
                  <ParallaxElement dataPercent="70">
                    <div ref={l21}> Z </div>
                  </ParallaxElement>
                </motion.span>
              </h1>
            </div>

            <ParallaxElement dataPercent="-10">
              <div ref={l22} className="img"></div>
            </ParallaxElement>
          </Header>

          <ParallaxElement dataPercent="-2" dataDirection="y">
            <About ref={l23}>
              <div className="title">
                <h1>¿Quiénes somos?</h1>
              </div>

              <div>
                Misión <br />
                Promover la participación de los jóvenes al debate y desarrollar en
                ellos el pensamiento crítico-analítico a través de un foro
                constructivo, donde el diálogo abierto sea la principal herramienta
                para solucionar conflictos planteados.
              </div>

              <div>
                Visión <br />
                Catalogarse como un modelo de las Naciones Unidas con alto impacto
                social, impulsando el idioma inglés y la formación de líderes
                estudiantes dentro de México.
              </div>
            </About>
          </ParallaxElement>

          <ParallaxElement dataPercent="-2" dataDirection="y">
            <Committees ref={l24}>
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
              </p>
              </div>

              <motion.div className="slides">
                <AnimateSharedLayout type="crossfade">

                  <motion.div className="card" layout >
                    <div className="title">ONU MUJERES</div>
                    <div className="descrip">
                      ONU Mujeres fue establecida para acelerar el proceso de mejora de las condiciones de vida de mujeres y niñas, buscando resolver sus necesidades y aumentando su calidad de vida.
                    </div>
                    <Link href="/signup">
                      <div className="enroll"> <a> PARTICIPA </a> </div>
                    </Link>
                  </motion.div>

                  <div className="card">
                    <div className="title">CORTE INTERNACIONAL DE JUSTICIA</div>
                    <div className="descrip">
                      También conocido como Tribunal Internacional de Justicia, busca emitir opiniones consultivas relacionadas a órganos o instituciones espcializados de la ONU.
                    </div>
                    <Link href="/signup">
                      <div className="enroll"> <a> PARTICIPA </a> </div>
                    </Link>
                  </div>

                  <div className="card">
                    <div className="title">SENADO DE LA REPÚBLICA</div>
                    <div className="descrip">
                      El Senado de la República es una institución fundamental que coordina el ejercicio de la democracia. La Cámara de Senadores nos garantiza que dicha representatividad vele por los intereses de cada entidad federativa.
                </div>
                    <Link href="/signup">
                      <div className="enroll"> <a> PARTICIPA </a> </div>
                    </Link>
                  </div>

                  <div className="card">
                    <div className="title">World Tourism Organization </div>
                    <div className="descrip">
                      Is the United Nations agency responsible for promoting responsible, sustainable and accessible tourism for all created in 1975, with 159 Member States, 6 Associate Members, 2 Observers and more than 500 Affiliated Members.
                </div>
                    <Link href="/signup">
                      <div className="enroll"> <a> PARTICIPA </a> </div>
                    </Link>
                  </div>
                </AnimateSharedLayout>
              </motion.div>

              <div className="scroll"> <Arrow /> Desliza </div>
            </Committees>
          </ParallaxElement>

          <ParallaxElement dataPercent="-2" dataDirection="y">
            <Secretaries ref={l25}>
              <ParallaxElement dataPx="150" dataDirection="x">
                <ul ref={l26}>
                  <Link href="secretaries/digital"><li>Secretaría Digital</li></Link>
                  <Link href="secretaries/general"><li>Secretaría General</li></Link>
                  <Link href="secretaries/ingles"><li>Secretaría de Ingles</li></Link>
                  <Link href="secretaries/finanzas"><li>Secretaría de Finanzas</li></Link>
                  <Link href="secretaries/academica"><li>Secretaría Académica</li></Link>
                  <Link href="secretaries/protocolo"><li>Secretaría de Protocolo</li></Link>
                  <Link href="secretaries/desarrollo"><li>Secretaría de Logística</li></Link>
                  <Link href="secretaries/desarrollo"><li>Secretaría de Desarrollo Sostenible</li></Link>
                </ul>
              </ParallaxElement>

              <ParallaxElement dataPx="150" dataDirection="x">
                <ul ref={l27}>
                  <Link href="secretaries/digital"><li>Secretaría Digital</li></Link>
                  <Link href="secretaries/general"><li>Secretaría General</li></Link>
                  <Link href="secretaries/ingles"><li>Secretaría de Ingles</li></Link>
                  <Link href="secretaries/finanzas"><li>Secretaría de Finanzas</li></Link>
                  <Link href="secretaries/academica"><li>Secretaría Académica</li></Link>
                  <Link href="secretaries/protocolo"><li>Secretaría de Protocolo</li></Link>
                  <Link href="secretaries/desarrollo"><li>Secretaría de Logística</li></Link>
                  <Link href="secretaries/desarrollo"><li>Secretaría de Desarrollo Sostenible</li></Link>
                </ul>
              </ParallaxElement>

              <ParallaxElement dataPx="150" dataDirection="x">
                <ul ref={l28}>
                  <Link href="secretaries/digital"><li>Secretaría Digital</li></Link>
                  <Link href="secretaries/general"><li>Secretaría General</li></Link>
                  <Link href="secretaries/ingles"><li>Secretaría de Ingles</li></Link>
                  <Link href="secretaries/finanzas"><li>Secretaría de Finanzas</li></Link>
                  <Link href="secretaries/academica"><li>Secretaría Académica</li></Link>
                  <Link href="secretaries/protocolo"><li>Secretaría de Protocolo</li></Link>
                  <Link href="secretaries/desarrollo"><li>Secretaría de Logística</li></Link>
                  <Link href="secretaries/desarrollo"><li>Secretaría de Desarrollo Sostenible</li></Link>
                </ul>
              </ParallaxElement>

            </Secretaries>
          </ParallaxElement>

          <Footer></Footer>

        </HomeWrapper>
      </ScrollContainer>
    </>
  )
}
