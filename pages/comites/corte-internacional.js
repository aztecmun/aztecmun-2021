// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import { motion } from 'framer-motion'

// Styles
import { ComContainer, Icon, Close } from 'styles/pages/committeesElements'

export default function corteInernacional() {
  return (
    <ComContainer
      layoutId="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -200 }}
    >
      <Head>
        <title>Corte Internacional de Justicia | AztecMUN 2021</title>

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/comite.png" />
        <meta
          property="og:title"
          content="Corte Internacional de Justicia | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="Es el principal órgano judicial de las Naciones Unidas; se encuentra en el Palacio de La Paz en la Haya."
        />
      </Head>

      <Link href="/#committees" scroll={false}>
        <Close />
      </Link>

      <div className="video">
        <iframe src="https://www.youtube.com/embed/tzEo-oig5kc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <img src="/img/div.png" alt="aztecmun" className="div" />

      <Link href="/signup">
        <div className="button">Participa</div>
      </Link>

      <motion.div className="content">
        <div className="content__title">
          <div className="content__title__logo">
            <img src="/img/comite.png" alt="senado logo" />
          </div>
          <motion.h1 layoutId="title">
            Corte Internacional de Justicia
          </motion.h1>
          <p>Fecha de creación: 26 de Junio de 1945</p>
        </div>

        <motion.p className="content__main" layoutId="content">
          La Corte Internacional de Justicia también conocida como Tribunal Internacional de Justicia fue creada en 1945 por la Carta de las Naciones Unidas y comenzó a funcionar en 1946, es el principal órgano judicial de las Naciones Unidas; su sede se encuentra en el Palacio de La Paz en la Haya (países bajos). Una de sus funciones principales es emitir opiniones consultivas sobre cuestiones que pueden someterse órganos o instituciones especializadas de la ONU. Se compone de quince magistrados (jueces), elegidos por la Asamblea General y el Consejo de Seguridad, los cuales cumplen mandatos de nueve años. La Corte desempeña una doble misión: el arreglo de las controversias de orden jurídico entre los Estados que le sean sometidas por estos (procedimiento contencioso) y la emisión de dictámenes consultivos sobre cuestiones jurídicas que le sometan los órganos u organismos de las Naciones Unidas (procedimiento consultivo).
        </motion.p>

        <div className="content__topics">
          <h1 className="content__topics__title">Tópicos</h1>
          <div className="content__topics__1">
            <h1 className="content__topics--red">Tópico A: </h1>
            <p>
              Aplicación del Convenio Internacional para la Represión de la
              Financiación del Terrorismo y de la Convención Internacional sobre
              la Eliminación de Todas las Formas de Discriminación Racial
              (Ucrania contra Federación de Rusia).
            </p>
          </div>

          <div className="content__topics__2">
            <h1 className="content__topics--green">Tópico B: </h1>
            <p>
              Caso relativo a las actividades militares y paramilitares en
              Nicaragua y contra Nicaragua (Nicaragua contra los Estados Unidos
              de América)
            </p>
          </div>
        </div>

        <h1 className="content__members__title"> Miembros </h1>
        <div className="content__members">
          <div className="content__members__member--1">
            <Icon className="content__members__member__img" />
            <h1>Presidente</h1>
            <p>Alessandra Ortiz Espinosa </p>
          </div>

          <div className="content__members__member--2">
            <Icon className="content__members__member__img" />
            <h1>Vicepresidente</h1>
            <p>Carolina Rangel Monterrubio </p>
          </div>

          <div className="content__members__member--3">
            <Icon className="content__members__member__img" />
            <h1>Vicepresidente</h1>
            <p>Ximena Denise Macias Mateos </p>
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
            <Link href="senado">
              <div className="content__dots__dot">
                <p className="content__dots__dot __message"> SENADO </p>
              </div>
            </Link>
            <div className="content__dots__dot --active">
              <p className="content__dots__dot __message"> CIJ </p>
            </div>
          </div>
        </div>
      </motion.div>
    </ComContainer>
  )
}
