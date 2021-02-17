import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

export const FormWrapper = styled.div`
  color: ${props => props.theme.c_black};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  overflow-y: scroll;
  background: url('./svg/committees_bg.svg');
  background-size: cover;
`

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 90%;
  width: 90%;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  overflow-y: scroll;

  span {
    color: ${props => props.theme.c_greenAqua};
    text-decoration: underline;
    cursor: pointer;
  }

  h1{
    margin-bottom: 15px;
  }

  @media (max-height: 550px){
    h1{
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
  }
`

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 800;
  color: #EDEDED;

  margin: 15px 0;
  padding: 1rem 2rem;

  background: ${props => props.theme.c_greenAqua};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.c_greenAqua};
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-radius: 20px;
  }

  @media (max-height: 550px){
    margin: 5px 0;
    padding: .5rem 1rem;
  }
`

export const Input = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 15px 0;

  input {
    color: ${props => props.theme.c_black};

    padding: 15px 2rem;

    border-radius: 15px;
    border: 2px solid black;
    outline: none;
    transition: border 0.3s ease-in-out;

    &:focus {
      ${props => props.theme.c_greenAqua};
    }

    &:hover {
      border: 2px solid ${props => props.theme.c_greenAqua};
    }
  }

  @media (max-height: 570px){
    margin: 5px 0;

    input{
      padding: 10px 2rem;
    }
  }
`

export const Close = styled(AiOutlineClose)`
  color: ${props => props.theme.c_greenAqua};

  position: absolute;
  top: 2%;
  right: 4%;
  z-index: 10;

  height: 50px;
  width: 50px;

  cursor: pointer;

  @media(max-width: 768px){
    height: 25px;
    width: 25px;
  }
`