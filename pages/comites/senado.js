// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import { motion } from 'framer-motion'

// Styles
import { ComContainer, Icon, Close } from 'styles/pages/committeesElements'

export default function unicef() {
  return (
    <ComContainer
      layoutId="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -200 }}
    >
      <Head>
        <title>Senado de la República | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/senado.png" />
        <meta
          property="og:title"
          content="Senado de la República | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="Es la instancia superior de la Cámara dónde se discute y en su caso, se aprueba el trabajo legislativo. Es una institución fundamental que coordina el ejercicio de la democracia."
        />
      </Head>

      <Link href="/#committees" scroll={false}>
        <Close />
      </Link>

      <div className="video">
        <iframe src="https://www.youtube.com/embed/CKXk6SCEYW8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <img src="/img/div.png" alt="aztecmun" className="div" />

      <Link href="/signup">
        <div className="button">Participa</div>
      </Link>

      <motion.div className="content">
        <div className="content__title">
          <div className="content__title__logo">
            <img src="/img/senado.png" alt="senado logo" />
          </div>
          <motion.h1 layoutId="title">Senado de la República</motion.h1>
          <p>Fecha de creación: 4 de Octubre de 1824</p>
        </div>

        <motion.p className="content__main" layoutId="content">
          Es la instancia superior de la Cámara dónde se discute y en su caso,
          se aprueba el trabajo legislativo que se ponga a su consideración. El
          Senado de la República es una institución fundamental que coordina el
          ejercicio de la democracia.
          <br /> <br />
          La Cámara de Senadores nos garantiza que dicha representatividad vele
          por los intereses de cada entidad federativa que nos conforman como
          país.
        </motion.p>

        <div className="content__topics">
          <h1 className="content__topics__title">Tópicos</h1>
          <div className="content__topics__1">
            <h1 className="content__topics--red">Tópico A: </h1>
            <p>
              Proyecto de decreto para la suspensión definitiva del Tren Maya.
            </p>
          </div>

          <div className="content__topics__2">
            <h1 className="content__topics--green">Tópico B: </h1>
            <p>
              Financiamiento de la educación para la eliminación de la
              inseguridad y la pobreza
            </p>
          </div>
        </div>

        <h1 className="content__members__title"> Miembros </h1>
        <div className="content__members">
          <div className="content__members__member--1">
            <Icon className="content__members__member__img" />
            <h1>Presidente</h1>
            <p>Zitlalli Belém Morales López </p>
          </div>
          <div className="content__members__member--2">
            <Icon className="content__members__member__img" />
            <h1>Vicepresidente </h1>
            <p>Frida Castillo Juarez </p>
          </div>

          <div className="content__dots">
            <Link href="unwto">
              <div className="content__dots__dot">
                <p className="content__dots__dot __message"> UNWTO </p>
              </div>
            </Link>
            <Link href="unicef">
              <div className="content__dots__dot">
                <p className="content__dots__dot __message"> UNICEF </p>
              </div>
            </Link>
            <Link href="onu-mujeres">
              <div className="content__dots__dot">
                <p className="content__dots__dot __message"> ONU </p>
              </div>
            </Link>
            <div className="content__dots__dot --active">
              <p className="content__dots__dot __message"> SENADO </p>
            </div>
            <Link href="corte-internacional">
              <div className="content__dots__dot">
                <p className="content__dots__dot __message"> CIJ </p>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </ComContainer>
  )
}
