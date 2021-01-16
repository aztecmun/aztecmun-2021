import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ComMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 5vh;
  width: 100%;

  background: url('/Img/MENU TITULO.png') center no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`

export const ComLink = styled.li`
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

export const ComContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 50px;

  height: 100vh;
  max-width: 100vw;

  @media (max-width: 768px) {
    height: 200vh;
  }
`

export const ComHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    color: #d72a40;
  }

  p {
    color: #3d66a8;
  }
`

export const ComDescription = styled.div`
  h2 {
    font-size: 1.5rem;
    color: #459b53;
  }
`

export const ComTopic = styled.div`
  display: flex;

  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Topic = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
    color: #d72a40;
  }

  h3 {
    font-size: 1.2rem;
    color: #3d66a8;
  }
`

export const ComMembers = styled.div`
  position: relative;

  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: 1rem;

  padding: 3rem;

  background: url('/Img/RECURSO.png');

  h2 {
    color: #fff;

    position: absolute;
    top: 25px;
    left: 25%;
  }
`

export const ComMember = styled.div`
  align-self: center;
  justify-self: center;

  height: 80%;
  width: 80%;

  border-radius: 50%;
  background: white;
`
