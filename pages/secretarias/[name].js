// React and Next imports
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Libraries imports
import { AnimatePresence } from 'framer-motion'

// Styled Components imports
import {
  Container,
  Header,
  Title,
  Description,
} from 'components/StyledDescrip/DescripElements'
import {
  SecContainer,
  SecDesc,
  SecFunc,
  SubLink,
  SubMenu,
  SecTitle,
  SecMembers,
  Members,
} from './SecretariasElements'

export default function secretarias() {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Secretarías - AztecMUN 2021</title>
      </Head>

      <Header>
        <h1>Secretarías</h1>
      </Header>

      <Description>
        <Title>
          <h2>Función de las secretarías en AZTECMUN</h2>
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloremque sint exercitationem pariatur itaque accusamus, error
          veritatis voluptatibus ullam et dolores minus, debitis provident qui
          sunt temporibus commodi quidem voluptatum! Esse alias, voluptates ipsa
          nam consequuntur eius porro! Inventore, tempore! Sed fuga
          exercitationem, mollitia rerum dignissimos veritatis blanditiis cum
          consequuntur ducimus quod corrupti debitis distinctio repellendus
          iusto, dolore vero nemo. Commodi ipsum nesciunt cupiditate nihil
          veritatis nulla corrupti iusto dolore repellendus impedit tempora
          quibusdam, incidunt rerum soluta ad, culpa quaerat ipsam maxime sed
          magnam placeat iste fuga sint. Non, corrupti?
        </p>
      </Description>
      <SubMenu>
        <SubLink>
          <Link href="/secretarias/ingles" scroll={false}>
            <a
              clasName={router.asPath === '/secretarias/ingles' ? 'active' : ''}
            >
              s. inglés
            </a>
          </Link>
        </SubLink>

        <SubLink>
          <Link href="/secretarias/finanzas" scroll={false}>
            <a clasName={router.asPath === '/finanzas' ? 'active' : ''}>
              s. finanzas
            </a>
          </Link>
        </SubLink>

        <SubLink>
          <Link href="/secretarias/protocolos" scroll={false}>
            <a clasName={router.asPath === '/protocolos' ? 'active' : ''}>
              s. protocolos
            </a>
          </Link>
        </SubLink>

        <SubLink className="active">
          <Link href="/secretarias/digital" scroll={false}>
            <a>s. digital</a>
          </Link>
        </SubLink>

        <SubLink>
          <Link href="/secretarias/academica" scroll={false}>
            <a
              clasName={
                router.asPath === '/secretarias/academica"' ? 'active' : ''
              }
            >
              s. academica
            </a>
          </Link>
        </SubLink>
      </SubMenu>

      <AnimatePresence exitBeforeEnter>
        <SecContainer
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0, duration: 2 }}
          exit={{ opacity: 0, y: 1000, duration: 2 }}
          key={router.query.name}
        >
          <SecFunc>
            <SecTitle>
              <img src="/Img/SIM FOTOS.png" alt="aztecmun logo" />
              <h3>S. {router.query.name}</h3>
            </SecTitle>
            <SecDesc>
              <h3>Función de la Secretaría {router.query.name}</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              nihil alias iste quae qui magnam odit cupiditate, ipsa voluptates
              atque! Impedit officia nemo perferendis, dolorum nostrum nisi
              aliquid labore! Dolorum! Repudiandae vel debitis sequi sint porro
              unde asperiores magnam libero eius vitae et, accusamus totam
              molestiae a sed animi id nostrum. Explicabo a eius nesciunt
              perspiciatis reprehenderit non nihil commodi. Voluptas itaque nemo
              provident minima, maiores praesentium modi doloremque repellat
              rerum blanditiis expedita vel error? Unde, laudantium? Ad hic
              dignissimos illo quos, accusantium dolore illum quibusdam
              praesentium magni facilis accusamus!
            </SecDesc>
          </SecFunc>

          <SecMembers>
            <Title>
              <h2>Miembros de la Secretaría {router.query.name}</h2>
            </Title>
            <Members />
            <Members />
            <Members />
            <Members />
          </SecMembers>
        </SecContainer>
      </AnimatePresence>
    </Container>
  )
}
