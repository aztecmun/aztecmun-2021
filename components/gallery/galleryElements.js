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

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 5%;

    cursor: pointer;

    &:hover{
      background: ${props => props.theme.body_bg2};
    }

    @media (max-width: 768px){
      top: 80%;

      height: 50px;
      width: 20%;
    }
  }

  .left{
    left: 50px;
  }

  .right{
    right: 50px;
  }
`