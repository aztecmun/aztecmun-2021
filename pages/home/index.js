// React and Next imports
import React from 'react'
import Head from 'next/head'

// Styled Components imports
import {
  Container,
  Header,
  Title,
  Description,
} from 'components/StyledDescrip/DescripElements'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>AztecMUN 2021</title>
      </Head>
      <Header>
        <h1>¡ Bienvenido !</h1>
      </Header>

      <Description>
        <Title>
          <h2>¿Qué es AZTECMUN?</h2>
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
    </Container>
  )
}
