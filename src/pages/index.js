import { motion } from 'framer-motion'
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;

  >img{
    height: 400px;
    width: 100%;
  }
`

function index() {
  return (
    <Wrapper
      layoutId="Index"
      initial={{ opacity: 0, x: -50 }}
      animate= {{ opacity: 1, x: 0 }}
      exit= {{ opacity: 0, x: 50 }}
      >

        <img src="/img/bienvenidos.png" />

    </Wrapper> 
  )
}

export default index
