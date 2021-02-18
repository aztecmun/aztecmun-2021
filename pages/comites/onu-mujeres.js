// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import { motion } from 'framer-motion'

// Styles
import { ComContainer, Icon, Close } from 'styles/pages/committeesElements'

export default function onuMujeres() {
  return (
    <ComContainer
      layoutId="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -200 }}
    >
      <Head>
        <title>ONU Mujeres | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/onu.png" />
        <meta property="og:title" content="ONU Mujeres | AztecMUN 2021" />
        <meta
          property="og:description"
          content="ONU Mujeres fue establecida para acelerar el proceso de mejora de las condiciones de vida de mujeres y niñas, buscando resolver sus necesidades y aumentando su calidad de vida."
        />
      </Head>

      <Link href="/#committees" scroll={false}>
        <Close />
      </Link>

      <div className="video">
        <iframe src="https://www.youtube.com/embed/RZocbb6Nb6M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>

      <img src="/img/div.png" alt="aztecmun" className="div" />

      <Link href="/signup">
        <div className="button">Participa</div>
      </Link>
      
      <motion.div className="content">
        <div className="content__title">
          <div className="content__title__logo">
            <img src="/img/onu.png" alt="senado logo" />
          </div>
          <motion.h1 layoutId="title">ONU Mujeres</motion.h1>
          <p>Fecha de creación: 2 de Julio del 2010</p>
        </div>

        <motion.p className="content__main" layoutId="content">
          ONU Mujeres fue establecida para acelerar el proceso de mejora de las
          condiciones de vida de mujeres y niñas, buscando resolver sus
          necesidades y aumentando su calidad de vida.
        </motion.p>

        <div className="content__topics">
          <h1 className="content__topics__title">Tópicos</h1>
          <div className="content__topics__1">
            <h1 className="content__topics--red">Tópico A: </h1>
            <p>
              Conocer los avances en materia legal del aborto, para poder
              difundir la información sobre la toma de decisiones del cuerpo de
              la mujer en América Latina.
            </p>
          </div>

          <div className="content__topics__2">
            <h1 className="content__topics--green">Tópico B: </h1>
            <p>
              Aminorar el impacto del impuesto rosa y conocer cómo se relaciona
              con la falta de acceso a productos “femeninos” en zonas marginadas
              de México.
            </p>
          </div>
        </div>

        <h1 className="content__members__title"> Miembros </h1>
        <div className="content__members">
          <div className="content__members__member--1">
            <Icon className="content__members__member__img" />
            <h1>Presidente</h1>
            <p>Valeria Roxana Cortés Flores</p>
          </div>

          <div className="content__members__member--2">
            <Icon className="content__members__member__img" />
            <h1>Moderador</h1>
            <p>María Xareny Méndez Ruiz</p>
          </div>

          <div className="content__members__member--3">
            <Icon className="content__members__member__img" />
            <h1>Asesor</h1>
            <p>Alexia Fernanda González Rangel</p>
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
            <div className="content__dots__dot --active">
              <p className="content__dots__dot __message"> ONU </p>
            </div>
            <Link href="senado">
              <div className="content__dots__dot">
                <p className="content__dots__dot __message"> SENADO </p>
              </div>
            </Link>
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
