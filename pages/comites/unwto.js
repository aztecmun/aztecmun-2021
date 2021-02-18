// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports 
import { motion } from 'framer-motion'

// Styles
import { ComContainer, Icon, Close } from 'styles/pages/committeesElements'

export default function unwto() {
  return (
    <ComContainer layoutId="container">
      <Head> <title>World Tourism Organization | AztecMUN 2021</title> </Head>

      <Link href="/" scroll={false}>
        <Close />
      </Link>

      <div className="video"></div>

      <img src="/img/div.png" alt="aztecmun" className="div" />

      <motion.div className="content">
        <div className="content__title">
          <div className="content__title__logo" >
            <img src="/img/unwto.png" alt="unwto logo" />
          </div>
          <motion.h1 layoutId="title">World Tourism Organization</motion.h1>
          <p>Fecha de creación: 1 de Febrero 2020</p>
        </div>

        <motion.p className="content__main" layoutId="content">
          The World Tourism Organization (UNWTO) is the United Nations agency responsible for promoting responsible, sustainable and accessible tourism for all created in 1975, with 159 Member States, 6 Associate Members, 2 Observers and more than 500 Affiliated Members, the headquarter is in Madrid, Spain.
          <br /> <br />
          UNWTO, as the leading international organization in the field of tourism, advocates for tourism that contributes to economic growth, inclusive development and environmental sustainability, and provides leadership and support to the industry to expand its knowledge and tourism policies around the world.
        </motion.p>

        <div className="content__topics">
          <h1 className="content__topics__title">Topics</h1>
          <div className="content__topics__1">
            <h1 className="content__topics--red">Topic A: </h1>
            <p>Resolutions and strategies implemented for sustainable tourism in accommodation establishments.</p>
          </div>

          <div className="content__topics__2">
            <h1 className="content__topics--green">Topic B: </h1>
            <p>Implementation of guidelines and measures for the reactivation of tourism.</p>
          </div>
        </div>

        <h1 className="content__members__title"> Members </h1>
        <div className="content__members">
          <div className="content__members__member">
            <Icon className="content__members__member__img" />
            <h1>Chairman</h1>
            <p>Fatima Betsabé Díaz Ríos</p>
          </div>
          <div className="content__members__member">
          <Icon className="content__members__member__img" />
            <h1>First Moderator</h1>
            <p>Danna Itzel Sosa Sánchez  </p>
          </div>
          <div className="content__members__member">
          <Icon className="content__members__member__img" />
            <h1>Second Moderator</h1>
            <p>Hanzel Emanuel Castellanos Pérez</p>
          </div>
          <div className="content__members__member">
          <Icon className="content__members__member__img" />
            <h1>Advisor</h1>
            <p>Melody Angeli Johanna Ledesma Negrete</p>
          </div>
        </div>
      </motion.div>

    </ComContainer>
  )
}
