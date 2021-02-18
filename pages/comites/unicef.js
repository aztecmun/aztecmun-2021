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
        <title>United Nations Children's Fund | AztecMUN 2021</title>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/unicef.png" />
        <meta
          property="og:title"
          content="United Nations Children's Fund | AztecMUN 2021"
        />
        <meta
          property="og:description"
          content="UNICEF is the driving force contributing to the creation of a world where the rights of each and every child are respected. Therefore, we are a world organization like no other working with young people."
        />
      </Head>

      <Link href="/#committees" scroll={false}>
        <Close />
      </Link>

      <div className="video">
        <iframe src="https://www.youtube.com/embed/t5f37QtFX6I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>

      <img src="/img/div.png" alt="aztecmun" className="div" />

      <Link href="/signup">
        <div className="button">Participa</div>
      </Link>

      <motion.div className="content">
        <div className="content__title">
          <div className="content__title__logo">
            <img src="/img/unicef.png" alt="unicef logo" />
          </div>
          <motion.h1 layoutId="title">United Nations Children's Fund</motion.h1>
          <p>Fecha de creación: 11 de Diciembre de 1946</p>
        </div>

        <motion.p className="content__main" layoutId="content">
          UNICEF is the driving force contributing to the creation of a world
          where the rights of each and every child are respected. The
          international community has endowed us with the authority to influence
          decision-makers and various allies in grassroots communities to bring
          the most innovative ideas to life. Therefore, we are a world
          organization like no other and also an organization like no other
          among those working with young people.
        </motion.p>

        <motion.div className="content__topics">
          <h1 className="content__topics__title">Topics</h1>
          <div className="content__topics__1">
            <h1 className="content__topics--red">Topic A: </h1>
            <p>
              Creation of programs for the development of social-emotional
              skills during confinement and a mental health-friendly educational
              system.
            </p>
          </div>

          <div className="content__topics__2">
            <h1 className="content__topics--green">Topic B: </h1>
            <p>
              Developing an implementation plan to reduce child sexual abuse
              during the pandemic.
            </p>
          </div>
        </motion.div>

        <h1 className="content__members__title"> Members </h1>
        <div className="content__members">
          <div className="content__members__member--1">
            <Icon className="content__members__member__img" />
            <h1>Chairman</h1>
            <p>Ximena Esperanza Rojas Torres.</p>
          </div>
          <div className="content__members__member--2">
            <Icon className="content__members__member__img" />
            <h1>First Moderator</h1>
            <p>Samantha Guzmán Domínguez</p>
          </div>
          <div className="content__members__member--3">
            <Icon className="content__members__member__img" />
            <h1>Second Moderator</h1>
            <p>Danna Paola Barrera Montalvo</p>
          </div>
          <div className="content__members__member--4">
            <Icon className="content__members__member__img" />
            <h1>Advisor</h1>
            <p>Luz María Rivera Sánchez</p>
          </div>

          <div className="content__dots">
            <Link href="unwto">
              <div className="content__dots__dot">
                <p className="content__dots__dot __message"> UNWTO </p>
              </div>
            </Link>
            <div className="content__dots__dot --active">
              <p className="content__dots__dot __message"> UNICEF </p>
            </div>
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
