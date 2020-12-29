import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Layout = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    height: 100%;
    width: 100%;
`

export const Container = styled.div`
    min-height: 80vh;
    width: 100%;
`