import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    .Section{
        display: flex;

        height: 100%;
        width: 50%;

        background-image: url("/Img/Fondo1.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
`