// React and Next imports
import React, { useRef, useEffect, Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import { motion } from 'framer-motion'

// Local components imports
import Gallery from '../gallery'

// Styles
import {
  HomeWrapper,
  Header,
  About,
  Committees,
  Secretaries,
} from './homeElements'
import { BsArrowRightShort as Arrow } from 'react-icons/bs'

export default function index() {

  return (
    <HomeWrapper>
      <Head>
        <title>Aztecmun 2021 | Inicio</title>
      </Head>

      <Header>
        <div className="header-title">
          <h1> NO BASTA CON <br /> HABLAR DE PAZ </h1>
        </div>

        <div className="img"></div>
      </Header>

      <About>
        <h1 className="title">¿Quiénes somos?</h1>

        <p className="desc">
          AZTECMUN es un modelo de Naciones Unidas, proyecto educativo de
          Plantel Azteca que busca fomentar y desarrollar habilidades
          académicas para ayudar al fortalecimiento profesional y personal
          de los participantes, siendo así el comienzo para lograr el bien
          común en la sociedad a través de la concientización de los
          problemas nacionales e internacionales AZTECMUN parte de un
          proyecto con 17 años de trayectoria, logrando, reinventándose e
          implementando el debate en idioma inglés.
            </p>

        <p className="mision">
          <span>Misión</span>
              Promover la participación de los jóvenes al debate y desarrollar
              en ellos el pensamiento crítico-analítico a través de un foro
              constructivo, donde el diálogo abierto sea la principal
              herramienta para solucionar conflictos planteados.
            </p>

        <p className="vision">
          <span>Visión</span>
              Catalogarse como un modelo de las Naciones Unidas con alto impacto
              social, impulsando el idioma inglés y la formación de líderes
              estudiantes dentro de México.
            </p>
      </About>

      <Committees>
        <h1 className="title">Comités</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          numquam accusamus provident est! Quam iste non voluptas recusandae
          unde nisi repudiandae ullam perspiciatis error architecto. Quo
          velit amet praesentium facilis! Distinctio sequi ratione corporis
          excepturi aspernatur cum sint saepe quis, eligendi pariatur velit
          enim nam laborum doloremque molestias sapiente similique odit
          omnis, debitis itaque, iure nemo. Labore doloribus saepe
          assumenda!
            </p>

        <div className="slides">
          <div className="card" layout>
            <div className="card-title">ONU MUJERES</div>
            <div className="descrip">
              ONU Mujeres fue establecida para acelerar el proceso de mejora
              de las condiciones de vida de mujeres y niñas, buscando
              resolver sus necesidades y aumentando su calidad de vida.
                </div>
            <Link href="/signup">
              <div className="enroll">
                {' '}
                <a> PARTICIPA </a>{' '}
              </div>
            </Link>
          </div>

          <div className="card">
            <div className="card-title">
              CORTE INTERNACIONAL DE JUSTICIA
                </div>
            <div className="descrip">
              También conocido como Tribunal Internacional de Justicia,
              busca emitir opiniones consultivas relacionadas a órganos o
              instituciones espcializados de la ONU.
                </div>
            <Link href="/signup">
              <div className="enroll">
                {' '}
                <a> PARTICIPA </a>{' '}
              </div>
            </Link>
          </div>

          <div className="card">
            <div className="card-title">SENADO DE LA REPÚBLICA</div>
            <div className="descrip">
              El Senado de la República es una institución fundamental que
              coordina el ejercicio de la democracia. La Cámara de Senadores
              nos garantiza que dicha representatividad vele por los
              intereses de cada entidad federativa.
                </div>
            <Link href="/signup">
              <div className="enroll">
                {' '}
                <a> PARTICIPA </a>{' '}
              </div>
            </Link>
          </div>

          <div className="card">
            <div className="card-title">World Tourism Organization </div>
            <div className="descrip">
              Is the United Nations agency responsible for promoting
              responsible, sustainable and accessible tourism for all
              created in 1975, with 159 Member States, 6 Associate Members,
              2 Observers and more than 500 Affiliated Members.
                </div>
            <Link href="/signup">
              <div className="enroll">
                {' '}
                <a> PARTICIPA </a>{' '}
              </div>
            </Link>
          </div>
        </div>

        <div className="scroll">
          {' '}
          <Arrow /> Desliza{' '}
        </div>
      </Committees>

      <Secretaries>
        <h1 className="title">Secretarías</h1>

        <ul>
          <Link href="secretaries/digital">
            <li>Secretaría Digital</li>
          </Link>
          <Link href="secretaries/general">
            <li>Secretaría General</li>
          </Link>
          <Link href="secretaries/ingles">
            <li>Secretaría de Ingles</li>
          </Link>
          <Link href="secretaries/finanzas">
            <li>Secretaría de Finanzas</li>
          </Link>
          <Link href="secretaries/academica">
            <li>Secretaría Académica</li>
          </Link>
          <Link href="secretaries/protocolo">
            <li>Secretaría de Protocolo</li>
          </Link>
          <Link href="secretaries/desarrollo">
            <li>Secretaría de Logística</li>
          </Link>
          <Link href="secretaries/desarrollo">
            <li>Secretaría de Desarrollo Sostenible</li>
          </Link>
        </ul>
      </Secretaries>

      <Gallery />
    </HomeWrapper>
  )
}
