import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.text};
  position: relative;

  height: 100vh;
  width: 100vw;

  padding-top: 60px;

  overflow-y: scroll;

  background: ${props => props.theme.body_bg1};
`

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  
  width: 100%;
`

export const FormContainer = styled.div`
  position: relative;

  display: flex;
  justify-items: center;
  align-items: center;

  height: 90%;
  width: 90%;

  background: ${props => props.theme.body_bg2};
  border-radius: 20px;
`

const FormLogIn = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 100%;
  width: 100%;

  overflow-y: scroll;

  span {
    color: ${props => props.theme.blue};
    text-decoration: underline;

    cursor: pointer;
  }

  input {
    padding: 15px 2rem;

    background: ${props => props.theme.body_bg1};
    border-radius: 15px;
    border: 1px solid transparent;
    outline: none;
    transition: border 0.3s ease-in-out;

    &:focus {
      ${props => props.theme.blue};
    }

    &:hover {
      border: 1px solid ${props => props.theme.blue};
    }
  }
`

export const Signup = styled(FormLogIn)`
  gap: 1.2rem;
`

export const Login = styled(FormLogIn)`
`

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 800;
  color: #EDEDED;

  margin-bottom: 15px;
  padding: 1rem 2rem;

  background: ${props => props.theme.blue};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.blue};
  cursor: pointer;
  outline: none;

  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${props => props.theme.text};

    background: ${props => props.theme.body_bg2};

    transition: all 0.5s ease-in-out;
  }
`

export const Input = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  margin-bottom: 15px;
`

export const Close = styled.div`
  position: absolute;
  top: 4%;
  left: 2%;
  z-index: 2;

  height: 25px;
  width: 25px;

  cursor: pointer;
  transition: all .3s ease-in-out;

  @media (max-width: 768px){
    top: 25px;
    left: 25px;
  }

  .icon{
    position: relative;

    height: 100%;
    width: 2px;

    background: ${props => props.theme.button};;
    border-radius: 50px;
    transform: rotate(155deg);

    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      height: 100%;
      width: 2px;

      background: ${props => props.theme.button};;
      border-radius: 50px;
      transform: rotate(50deg);
    }
  }
`