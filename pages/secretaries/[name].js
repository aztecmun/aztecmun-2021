// React and Next imports
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// Info import

// Styles
import { SecWrapper } from 'styles/pages/secretariesElements'

export default function index() {
  const router = useRouter()

  return (
    <SecWrapper>
      <Head>
        {' '}
        <title> Aztecmun 2021 | Secretaría {router.query.name} </title>{' '}
      </Head>

      <div className="header">
        <h1 className="header-title">Secretaria {router.query.name}</h1>
        <p className="header-info">
          {' '}
          Fecha de Creación: 1 de Febrero del 2021{' '}
        </p>
      </div>

      <div className="main">
        <div className="main-info">
          <p>
            <span> Función: </span>
            La Secretaría Académica tiene como función coordinar, preparar y
            evaluar a las mesas, quienes fungirán como mentores de los
            delegados; para una correcta implementación y desarrollo de los
            tópicos, buscando siempre que esto sirva para lograr un excelente
            debate en cada comité. Es su deber prepararlos en el ámbito
            académico en aspectos como: los Modelos de Naciones Unidas y su
            papel para generar un cambio en la sociedad, plena comprensión de
            las funciones de la ONU y el desarrollo de sus habilidades de
            redacción de documentos, así como apoyarlos en la generación del
            material de apoyo que se utilizará durante el modelo y revisar las
            fuentes que se utilizarán en el foro, entre otras. Todo esto para
            generar delegados comprometidos a cambiar la situación actual
            mundial.
          </p>
        </div>

        <div className="members">
          <span>Miembros:</span>
          <ul>
            <li>America Elizabeth Egoavil Bernal</li>
            <li>Carlos Yahir Herrera Rodríguez </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </SecWrapper>
  )
}
