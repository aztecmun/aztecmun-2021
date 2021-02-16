// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import Carousel from 'react-elastic-carousel'

// Local styles imports
import useUser, { USER_STATES } from 'hooks/useUser'

// Styles
import {
  HomeWrapper,
  HomeHeader,
  HomeAbout,
  HomeCommittees,
  HomeSecretaries,
  HomeGallery,
} from '../styles/pages/homeElements'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function index() {
  const user = useUser()

  return (
    <HomeWrapper>
      <Head>
        <title> AztecMUN | Inicio </title>
      </Head>

      <HomeHeader>
        <div className="title">
          <h1>BIENVENIDOS A</h1>
          <img src="/img/logo.png" alt="logo_aztecmun" />
        </div>
      </HomeHeader>

      <img src="/img/div.png" alt="aztecmun 2021" className="div" />

      <HomeAbout id="about">
        <div className="sec1">
          <h1> Quiénes Somos</h1>
          <p>
            AZTECMUN es un modelo de Naciones Unidas, proyecto educativo de
            Plantel Azteca que busca fomentar y desarrollar habilidades
            académicas para ayudar al fortalecimiento profesional y personal de
            los participantes, siendo así el comienzo para lograr el bien común
            en la sociedad a través de la concientización de los problemas
            nacionales e internacionales. AZTECMUN parte de un proyecto con 17
            años de trayectoria, logrando, reinventándose e implementando el
            debate en idioma inglés.
          </p>
          {user === USER_STATES.NOT_LOGGED && (
            <>
              <Link href="/signup">
                <div className="button">Regístrate</div>
              </Link>
              <Link href="/login">
                <div className="button ghost">Inicia Sesión</div>
              </Link>
            </>
          )}
          {user && (
            <>
              <Link href="/profile">
                <div className="button">Completa tu perfil</div>
              </Link>
            </>
          )}
        </div>

        <div className="sec2">
          <img src="/svg/about.svg" alt="logo_aztecmun" />
        </div>

        <div className="sec3">
          <h1>Misión</h1>
          <p>
            Promover la participación de los jóvenes al debate y desarrollar en
            ellos el pensamiento crítico-analítico a través de un foro
            constructivo, donde el diálogo abierto sea la principal herramienta
            para solucionar los conflictos planteados.
          </p>
        </div>
        <div className="sec4">
          <h1>Visión</h1>
          <p>
            Catalogarse como un modelo de las Naciones Unidas con alto impacto
            social, impulsando el idioma inglés y la formación de líderes
            estudiantes dentro de México.
          </p>
        </div>
      </HomeAbout>

      <HomeCommittees id="committees">
        <div className="title">
          <h1>Comités</h1>
          <p>
            Un comité es un grupo de estudiantes que investigan y debaten acerca
            de una problemática específica, simulan ser una organización miembro
            de las naciones unidas, exponiendo soluciones a problemáticas
            mundiales.
          </p>
        </div>

        <div className="committees">
          <div className="card">
            <div className="logo">
              <img src="/img/unwto.png" alt="unwto" />
            </div>
            <div className="desc">
              <h1>World Tourism Organization</h1>
              <p>
                The World Tourism Organization (UNWTO) is the United Nations
                agency responsible for promoting responsible, sustainable and
                accessible tourism for all created in 1975, the headquarter is
                in Madrid, Spain.
              </p>
            </div>
            <Link href="/comites/unwto">
              <div className="button">VER MÁS</div>
            </Link>
          </div>

          <div className="card">
            <div className="logo">
              <img src="/img/unicef.png" alt="unwto" />
            </div>
            <div className="desc">
              <h1>United Nations Children's Fund</h1>
              <p>
                UNICEF is the driving force contributing to the creation of a
                world where the rights of each and every child are respected.
                Therefore, we are a world organization like no other working
                with young people.
              </p>
            </div>
            <Link href="/comites/unicef">
              <div className="button">VER MÁS</div>
            </Link>
          </div>

          <div className="card">
            <div className="logo">
              <img src="/img/onu.png" alt="onu mujeress" />
            </div>
            <div className="desc">
              <h1>ONU Mujeres</h1>
              <p>
                ONU Mujeres fue establecida para acelerar el proceso de mejora
                de las condiciones de vida de mujeres y niñas, buscando resolver
                sus necesidades y aumentando su calidad de vida.
              </p>
            </div>
            <Link href="/comites/onu-mujeres">
              <div className="button">VER MÁS</div>
            </Link>
          </div>

          <div className="card">
            <div className="logo">
              <img src="/img/senado.png" alt="senado de la republica" />
            </div>
            <div className="desc">
              <h1>Senado de la República</h1>
              <p>
                Es la instancia superior de la Cámara dónde se discute y en su
                caso, se aprueba el trabajo legislativo. Es una institución
                fundamental que coordina el ejercicio de la democracia.
              </p>
            </div>
            <Link href="/comites/senado">
              <div className="button">VER MÁS</div>
            </Link>
          </div>

          <div className="card">
            <div className="logo">
              <img
                src="/img/comite.png"
                alt="comité internacional de justicia"
              />
            </div>
            <div className="desc">
              <h1>Corte Inernacional de Justicia</h1>
              <p>
                Fue creada en 1945 por la Carta de las Naciones Unidas y comenzó
                a funcionar en 1946, es el principal órgano judicial de las
                Naciones Unidas; se encuentra en el Palacio de La Paz en la
                Haya.
              </p>
            </div>
            <Link href="/comites/corte-internacional">
              <div className="button">VER MÁS</div>
            </Link>
          </div>
        </div>
      </HomeCommittees>

      <HomeSecretaries id="secretaries">
        <div className="title">
          <h1>Secretarías</h1>
        </div>

        <Carousel itemsToShow={1}>
          <div className="secretarie">
            <div className="title">
              <h1 className="_1">Secretaría Académica</h1>
            </div>
            <div className="photo">
              <img src="/svg/secretaria academica.svg" alt="" />
            </div>
            <div className="desc">
              <p>
                La Secretaría Académica tiene como función coordinar, preparar y
                evaluar a las mesas, quienes fungirán como mentores de los
                delegados; para una correcta implementación y desarrollo de los
                tópicos, buscando siempre que esto sirva para lograr un
                excelente debate en cada comité. Es su deber prepararlos en el
                ámbito académico en aspectos como: los Modelos de Naciones
                Unidas y su papel para generar un cambio en la sociedad, plena
                comprensión de las funciones de la ONU y el desarrollo de sus
                habilidades de redacción de documentos, así como apoyarlos en la
                generación del material de apoyo que se utilizará durante el
                modelo.
              </p>
            </div>
          </div>

          <div className="secretarie">
            <div className="title">
              <h1 className="_2">Secretaría de Desarrollo</h1>
            </div>
            <div className="photo">
              <img src="/svg/secretaria desarrollo.svg" alt="" />
            </div>
            <div className="desc">
              <p>
                La secretaria de desarrollo sostenible tiene como propósito
                fomentar y crear un trabajo en conjunto de las mesas directivas
                para la preparación de tópicos enfocados a los Objetivos de
                Desarrollo Sostenible, así como su difusión con los delegados.
                Busca ser un apoyo para el desarrollo de una actitud
                investigativa, buena redacción y liderazgo. Como secretaria de
                Desarrollo Sostenible se promueve la iniciativa de los
                diecisiete ODS, impulsada por Naciones Unidas, y se busca
                adoptar medidas para generar la prosperidad económica
                compartida, el desarrollo social y la protección ambiental para
                todos los países. La integración de esta secretaria al Modelo de
                Naciones Unidas “AztecMUN”, brinda un giro para solucionar los
                problemas sociales más relevantes del siglo XXI.
              </p>
            </div>
          </div>

          <div className="secretarie">
            <div className="title">
              <h1 className="_3">Secretaría de Protocolo</h1>
            </div>
            <div className="photo">
              <img src="/svg/secretaria protocolo.svg" alt="" />
            </div>
            <div className="desc">
              <p>
                Corresponde a la Secretaría de Protocolo: asesorar a las Mesas
                Directivas, resolver disputas o preguntas protocolarias durante
                el debate y revisar el empleo correcto del protocolo en la
                cuarta edición del Modelo de Naciones Unidas del Plantel Azteca.
              </p>
            </div>
          </div>

          <div className="secretarie">
            <div className="title">
              <h1 className="_4">Secretaría de Inglés</h1>
            </div>
            <div className="photo">
              <img src="/svg/secretaria ingles.svg" alt="" />
            </div>
            <div className="desc">
              <p>
                The English Secretary is responsible for impulsing the English
                language in the United Nations Model "AztecMUN" committees and
                demolishing every communication barrier within languages. We
                work together with the academic and protocol secretaries to
                translate different committees' documents to ensure the accurate
                use of English. It is our duty as English secretary to train the
                directive chairs in instances such as grammar, reading, writing,
                and pronunciation in English so that the chairs can help their
                delegates at the time of the debate and have good results during
                the United Nations Model. We are committed to demonstrating that
                a different language does not represent an impediment to express
                our ideas. We work together to generate independent delegates
                seeking to change real problems and develop themselves
                completely as English speakers.
              </p>
            </div>
          </div>

          <div className="secretarie">
            <div className="title">
              <h1 className="_5">Secretaría Logística</h1>
            </div>
            <div className="photo">
              <img src="/svg/secretaria logistica.svg" alt="" />
            </div>
            <div className="desc">
              <p>
                La secretaria de logística se encarga principalmente de la
                organización de las actividades en los días del modelo y de las
                sesiones previas a él. Organizan los horarios y las salas donde
                se realizarán las sesiones de trabajo correspondientes del
                modelo. También como secretaría de logística, nos encargamos de
                llevar a cabo el registro de los delegados y personas que deseen
                ser parte del modelo, para así llevar el control de nuestros
                participantes.
              </p>
            </div>
          </div>

          <div className="secretarie">
            <div className="title">
              <h1 className="_1">Secretaría Finanzas</h1>
            </div>
            <div className="photo">
              <img src="/svg/secretaria finanzas.svg" alt="" />
            </div>
            <div className="desc">
              <p>
                Esta secretaria se encarga principalmente de la generación de
                estrategias para conseguir los recursos económicos necesarios
                para el modelo, a través delcontacto con patrocinadores, quienes
                tienen el interés de aportar al modelo, además de llevar un
                seguimiento del presupuesto conseguido con cada aportación.
              </p>
            </div>
          </div>

          <div className="secretarie">
            <div className="title">
              <h1 className="_2">Secretaría Digital</h1>
            </div>
            <div className="photo">
              <img src="/svg/secretaria digital.svg" alt="" />
            </div>
            <div className="desc">
              <p>
                La secretaria general es la encargada de diseñar, programar y
                desarrollar la pagina web, teniendo en cuenta los parametros
                necesarios para una excelente experiencia de usuario. Además,
                participa el manejo de las redes sociales.
              </p>
            </div>
          </div>
        </Carousel>
      </HomeSecretaries>

      <HomeGallery id="gallery">
        <div className="title">
          <h1> Galería </h1>
        </div>
        <Carousel>
          <img src="/img/s1.JPG" />
          <img src="/img/s2.JPG" />
          <img src="/img/s3.JPG" />
          <img src="/img/s4.JPG" />
          <img src="/img/s5.jpg" />
          <img src="/img/s6.JPG" />
          <img src="/img/s7.JPG" />
          <img src="/img/s8.jpg" />
          <img src="/img/s9.JPG" />
        </Carousel>
      </HomeGallery>
    </HomeWrapper>
  )
}
