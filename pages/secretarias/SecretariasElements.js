import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SubMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 5vh;
  width: 100%;

  background: #d72a40;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`

export const SubLink = styled.li`
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);

  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
  }

  .active {
    color: #fff;
  }
`

export const SecContainer = styled(motion.div)`
  max-width: 100%;
  max-height: 80vh;
`

export const SecFunc = styled.div`
  display: flex;

  width: 100%;
  height: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const SecTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 50%;
  height: 100%;

  img {
    width: 50%;
  }

  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    color: #f1a52c;
  }

  @media (max-width: 768px) {
    width: 100%;

    padding: 1rem;
  }
`

export const SecDesc = styled.div`
  width: 50%;

  padding: 1rem;

  h3 {
    text-transform: capitalize;
    color: #3d66a8;

    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SecMembers = styled.div`
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 40vh;
  width: 100%;

  h2 {
    text-transform: capitalize;
  }
`

export const Members = styled.div`
  height: 200px;
  width: 200px;

  border-radius: 50%;
  background: red;

  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
`
