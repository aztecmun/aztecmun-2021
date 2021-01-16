// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Styled Components imports
import {
  Container,
  Header,
  Title,
  Description,
} from 'components/StyledDescrip/DescripElements'
import {
  ComMenu,
  ComLink,
  ComContainer,
  ComHeader,
  ComDescription,
  ComTopic,
  Topic,
  ComMembers,
  ComMember,
} from './ComitesElements'

export default function comites() {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Comités - AztecMUN 2021</title>
      </Head>

      <Header>
        <h1>Comités</h1>
      </Header>

      <Description>
        <Title>
          <h2>Función de los comités en AZTECMUN</h2>
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

      <ComMenu>
        <ComLink>
          <Link href="/comites/1" scroll={false}>
            <a>Comités</a>
          </Link>
        </ComLink>

        <ComLink>
          <Link href="/comites/2" scroll={false}>
            <a>Comités</a>
          </Link>
        </ComLink>

        <ComLink>
          <Link href="/comites/3" scroll={false}>
            <a>Comités</a>
          </Link>
        </ComLink>

        <ComLink>
          <Link href="/comites/4" scroll={false}>
            <a>Comités</a>
          </Link>
        </ComLink>

        <ComLink>
          <Link href="/comites/5" scroll={false}>
            <a>Comités</a>
          </Link>
        </ComLink>

        <ComLink>
          <Link href="/comites/6" scroll={false}>
            <a>Comités</a>
          </Link>
        </ComLink>
      </ComMenu>

      <ComContainer>
        <ComHeader>
          <img src="" alt="" />
          <h1>{router.query.name}</h1>
          <p> Fecha de creación: 7 de julio del 2010 </p>
        </ComHeader>

        <ComDescription>
          <h2>Descripción del comité</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore
            culpa fugit temporibus numquam veniam a nesciunt fugiat nihil
            corporis! Magni fugit fuga aspernatur! Voluptate, id doloremque.
            Facere, tempore perspiciatis? Mollitia harum voluptatem minus
            asperiores expedita amet enim deserunt natus eius corporis. Ducimus
            odit facere voluptas minus. Nostrum commodi placeat provident
            tempora error autem eaque ducimus quasi? Voluptate, fuga reiciendis.
            Inventore ullam veniam ut optio neque voluptatibus ea dolore iste
            maiores dolorem. Dolorem exercitationem illo illum temporibus
            repellat iusto animi quasi molestiae quas vel? Similique, aliquam
            nisi! Iure, deserunt culpa. Animi excepturi eaque minima maiores
            sint expedita amet quibusdam! Non, iure! Sequi iusto fuga quo ex
            commodi nesciunt. Aspernatur quaerat veniam, similique doloribus
            tempore eos suscipit tenetur autem blanditiis aperiam. Accusantium
            reprehenderit quaerat eaque recusandae nulla quae, at dignissimos.
            Quia temporibus quod, pariatur alias sint sit beatae ipsa labore hic
            tenetur dolorum perferendis id nesciunt quae, veritatis, velit
            deleniti animi!
          </p>
        </ComDescription>

        <ComTopic>
          <Topic>
            <h2>Tópicos a tratar:</h2>
            <h3>Tópico A:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed
              ducimus quia fugiat laboriosam possimus, aperiam maxime, id quod
              dicta minima itaque, nemo consequuntur! Illo doloribus repellendus
              numquam mollitia! Perspiciatis? Repellendus voluptates eligendi
              modi deserunt culpa dicta non, harum temporibus porro. Aut itaque
              deleniti natus mollitia architecto neque, atque dolores laborum,
              suscipit rerum eveniet sapiente facere dolor explicabo quisquam
              dolore? Blanditiis, quis inventore nam assumenda praesentium odit
              ea, sint eum voluptatem nulla fugiat officiis asperiores sit a
              minus at, veritatis laborum repellendus consequatur totam dicta
              nesciunt recusandae quibusdam perspiciatis! Quaerat. Alias rem
              omnis, enim dolor reiciendis fugiat blanditiis corrupti dolorem
              minus doloremque at, quisquam expedita, in similique vero quam
              dicta vitae laboriosam sunt voluptates magni totam aspernatur
              consequuntur voluptate! Doloremque.
            </p>
          </Topic>

          <ComMembers>
            <h2>Miembros del Comité</h2>
            <ComMember />
            <ComMember />
            <ComMember />
            <ComMember />
          </ComMembers>
        </ComTopic>
      </ComContainer>
    </Container>
  )
}
