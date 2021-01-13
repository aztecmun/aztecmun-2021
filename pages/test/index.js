// React and Next imports
import { React, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import { AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from 'react-three-fiber'

// Styled components imports
import {
  Wrapper,
  NavContainer,
  NavMenu,
  NavLink,
  ContentContainer,
} from './TestElements'

function Sphere(props) {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[2, 2, 2]}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  )
}

export default function test() {
  return (
    <AnimatePresence>
      <Wrapper>
        <Head>
          <title>Test - Aztecmun</title>
        </Head>

        <NavContainer>
          <NavMenu>
            <NavLink>
              <Link href="/test">
                <a>Inicio</a>
              </Link>
            </NavLink>
            <NavLink>
              <Link href="/test">
                <a>Comites</a>
              </Link>
            </NavLink>
            <NavLink>
              <Link href="/test">
                <a>Secretarias</a>
              </Link>
            </NavLink>
          </NavMenu>
        </NavContainer>

        <ContentContainer>
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Sphere position={[0, 0, 0]} />
          </Canvas>
        </ContentContainer>
      </Wrapper>
    </AnimatePresence>
  )
}
