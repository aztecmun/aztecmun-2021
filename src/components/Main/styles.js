import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    height: 100%;
    width: 100%;

    overflow: hidden;
`

export const Container = styled(motion.div)`
    min-height: 85vh;
    width: 100%;
`