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
    <ComContainer layoutId="container">
      <Head> <title>Corte Internacional de Justicia | AztecMUN 2021</title> </Head>

      <Link href="/" scroll={false}>
        <Close />
      </Link>

      <div className="video"></div>

      <img src="/img/div.png" alt="aztecmun" className="div" />

      <motion.div className="content">
        <div className="content__title">
          <div className="content__title__logo" >
            <img src="/img/comite.png" alt="senado logo" />
          </div>
          <motion.h1 layoutId="title">Corte Internacional de Justicia </motion.h1>
          <p>Fecha de creación: 1 de Febrero 2020</p>
        </div>

        <motion.p className="content__main" layoutId="content">
          ONU Mujeres fue establecida para acelerar el proceso de mejora de las condiciones de vida de mujeres y niñas, buscando resolver sus necesidades y aumentando su calidad de vida.
        </motion.p>

        <div className="content__topics">
          <h1 className="content__topics__title">Tópicos</h1>
          <div className="content__topics__1">
            <h1 className="content__topics--red">Tópico A: </h1>
            <p>Aplicación del Convenio Internacional para la Represión de la Financiación del Terrorismo y de la Convención Internacional sobre la Eliminación de Todas las Formas de Discriminación Racial (Ucrania contra Federación de Rusia).</p>
          </div>

          <div className="content__topics__2">
            <h1 className="content__topics--green">Tópico B: </h1>
            <p>Caso relativo a las actividades militares y paramilitares en Nicaragua y contra Nicaragua (Nicaragua contra los Estados Unidos de América)</p>
          </div>
        </div>

        <h1 className="content__members__title"> Miembros </h1>
        <div className="content__members">
          <div className="content__members__member">
            <Icon className="content__members__member__img" />
            <h1>Presidente</h1>
            <p>Alessandra Ortiz Espinosa </p>
          </div>

          <div className="content__members__member">
            <Icon className="content__members__member__img" />
            <h1>Vicepresidente</h1>
            <p>Carolina Rangel Monterrubio </p>
          </div>

          <div className="content__members__member">
            <Icon className="content__members__member__img" />
            <h1>Vicepresidente</h1>
            <p>Ximena Denise Macias Mateos </p>
          </div>

          <div className="content__dots">
            <Link href="unwto">
              <div className="content__dots__dot"> <p className="content__dots__dot __message"> UNWTO </p> </div>
            </Link>
            <Link href="unicef">
              <div className="content__dots__dot"> <p className="content__dots__dot __message"> UNICEF </p> </div>
            </Link>
            <Link href="onu-mujeres">
              <div className="content__dots__dot"> <p className="content__dots__dot __message"> ONU </p> </div>
            </Link>
            <Link href="senado">
              <div className="content__dots__dot"> <p className="content__dots__dot __message"> SENADO </p> </div>
            </Link>
            <div className="content__dots__dot --active"> <p className="content__dots__dot __message"> CIJ </p> </div>
          </div>
        </div>
      </motion.div>

    </ComContainer>
  )
}
