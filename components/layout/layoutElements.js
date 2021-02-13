import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`

export const Switch = styled(motion.div)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

  min-height: 20px;
  min-width: 35px;

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
    -webkit-box-pack: start;
    -ms-flex-pack: start;
        justify-content: flex-start;
  }
`