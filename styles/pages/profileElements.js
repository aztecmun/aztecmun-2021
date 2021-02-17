import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  padding: 5rem 2rem;

  background: url('./svg/profiles_bg.svg');
  background-size: contain;

  @media (max-width: 768px) {
    padding: 2rem 0rem;
  }
`

export const ProfileContainer = styled.div`
  position: relative;

  display: flex;

  height: 80vh;
  width: 90vw;

  margin: auto;

  border-radius: 20px;
  background: rgba(224, 224, 224, 0.8);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    height: 90vh;

    flex-direction: column;
  }
`

export const ProfilePic = styled.div`
  flex: 2;

  border-radius: 50%;

  .pic {
    width: 100%;
    height: 400px;

    margin-bottom: 20px;

    border-radius: 50%;
  }

  @media (max-width: 768px){
    position: sticky;
    top: -75px;
    left: 0;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 150px;

    border: 1px;

    .pic{
      height: 100%;
      width: 150px;
    }
  }
`

export const ProfileInfo = styled.div`
  font-size: 1.2rem;

  flex: 6;
  padding: 2rem;

  input {
    width: 300px;

    background: transparent;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      border: 1px solid ${(props) => props.theme.c_blue};
    }
  }

  select{
    font-size: 1.2rem;

    max-width: 75%;

    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
      border: 1px solid ${props => props.theme.c_blue};
    }
  }

  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    
    margin-bottom: 20px;

    .name {
      font-size: 2rem;
    }

    .school {
      font-size: 1.2rem;
      color: ${props => props.theme.c_blue};

      align-self: flex-end;
      display: flex;
      gap: 2px;

      margin-left: 20px;
    }

    .committee{ color: ${props => props.theme.c_blue}; }
  }

  .about {

    .icon {
      font-size: 1.2rem;

      width: 90%;

      margin-bottom: 20px;
      padding-bottom: 10px;

      border-bottom: 3px solid ${(props) => props.theme.c_blue};
    }

    .contact {
      display: grid;
      grid-template-columns: 80px 1fr;
      grid-template-rows: auto;

      .c1 {
        grid-column: 1 / 2;
        justify-self: start;

        margin-bottom: 20px;
      }

      .c2 {
        grid-column: 2 / 3;

        margin-bottom: 20px;
      }

      .dec {
        text-decoration: underline;
        color: ${(props) => props.theme.c_blue};
      }
    }
  }

  @media (max-width: 768px){
      padding: 1rem;

      overflow-x: hidden;

      input{
        text-overflow: ellipsis;

        max-width: 50%;

        &:nth-of-type(1){
          max-width: 75%;
        }
      }

      .top{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;

        margin-bottom: 40px;

        .school{
          align-self: flex-start;
          margin-left: 0;
        }
      }
  }
`

export const Close = styled(AiOutlineClose)`
  color: ${props => props.theme.c_greenAqua};

  position: fixed;
  top: 2%;
  right: 2%;
  z-index: 10;

  height: 50px;
  width: 50px;

  cursor: pointer;
`