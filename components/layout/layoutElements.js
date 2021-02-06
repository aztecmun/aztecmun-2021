import styled from 'styled-components'
import { darkTheme, lightTheme } from '../theme'
import { motion } from 'framer-motion'

export const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

export const Switch = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 20px;
  width: 40px;

  padding: 5px;

  background: ${props => props.theme.text};
  border-radius: 50px;
  cursor: pointer;

  .handle{
    width: 15px;
    height: 15px;

    border-radius: 50px;
    background: ${props => props.theme.body_bg2};
  }

  &[data-isOn="true"]{
    justify-content: flex-start;
  }

  @media (min-width: 320px) and (max-width: 768px){
    height: 10px;
    width: 20px;

    padding: 2px;

    .handle{
      width: 7px;
      height: 7px;

      border-radius: 50px;
      background: ${props => props.theme.body_bg1};
    }
  }
`