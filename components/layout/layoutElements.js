import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`

export const Switch = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: minmax(20px, 20px);
  width: minmax(35px, 35px);

  padding: 4px;

  background: ${props => props.theme.text};
  border-radius: 50px;
  cursor: pointer;

  .handle{
    width: 12px;
    height: 12px;

    border-radius: 50px;
    background: ${props => props.theme.body_bg2};
  }

  &[data-isOn="true"]{
    justify-content: flex-start;
  }
`