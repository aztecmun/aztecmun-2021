import styled from 'styled-components'
import { frame } from '../home/homeElements'

export const GalWrapper = styled(frame)`
  position: relative;

  max-height: 50vh;
  min-width: 100%;
  max-width: 100%;

  user-select: none;

  img{
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  .controls{
    position: absolute;
    top: 0;

    height: 100%;
    width: 15%;

    opacity: .1;
    cursor: pointer;

    background: ${props => props.theme.text};

    &:hover{
      opacity: .2;
    }
  }

  .left{
    left: 0;
  }

  .right{
    right: 0;
  }
`