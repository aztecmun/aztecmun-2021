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
import styled from 'styled-components'

const Desc = styled(Description)`
  display: flex;

  img {
    height: 250px;
    width: 300px;
  }
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>AztecMUN 2021</title>
      </Head>
      <Header />
      <Desc>
        <Title>
          <h2>¿Qué es AZTECMUN?</h2>
        </Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        aliquam quam nam cupiditate quasi nulla sequi dignissimos eos vitae
        asperiores? Fuga iusto earum id itaque, animi aspernatur quos ratione
        dolorem. Tempore repellat necessitatibus accusantium corrupti id sint
        expedita quod quia assumenda veniam error reprehenderit quam, cum
        voluptatem maiores eum suscipit, aliquid hic aliquam enim optio itaque!
        Ullam, ex? Minima, esse. Harum dignissimos repellendus doloremque.
        Expedita a modi vel illum non veritatis quo, corrupti vitae provident
        necessitatibus ipsa sit deleniti obcaecati ipsam dolorum quisquam aut
        dicta temporibus sequi! Assumenda, ea quaerat? Debitis ducimus magnam
        voluptatibus beatae temporibus voluptatum voluptates, expedita fugiat
        quod dolores facilis sapiente corporis, dignissimos repellendus in quis
        perspiciatis accusamus. Provident ipsam quo ex deserunt numquam? Quae,
        exercitationem odio. Expedita enim quisquam blanditiis nisi non quia
        nobis iure quo officiis ea pariatur ratione facilis delectus, ipsa
        soluta aperiam quaerat doloribus recusandae tempore, cumque nam? Ut
        cupiditate nobis veniam sapiente.
        <img src="/Img/SIM FOTOS.png" alt="" />
      </Desc>
    </Container>
  )
}
