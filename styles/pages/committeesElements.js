import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ImUser } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'

export const ComContainer = styled(motion.div)`
  height: auto;
  width: 100%;

  padding-bottom: 200px;

  .video{
    height: 50vh;
    width: 100%;

    iframe{
      width: 100%;
      height: 100%;
    }
  }

  .div{
    width: 100%;
    height: 60px;

    margin-bottom: 50px;
  }

  .button{
    font-size: 1.2rem;
    color: ${props => props.theme.c_white};

    display: flex;
    justify-content: center;

    padding: 1rem 2rem;
    margin: 50px auto;

    max-width: 15%;

    border-radius: 30px;
    background: ${props => props.theme.c_blue};
    cursor: pointer;
    transition: ${props => props.theme.trans};

    &:hover{
      transform: scale(1.05);
    }
  }

  .content{
    width: 60%;

    margin: auto;

    h1{
        text-align: center;
        font-size: 3rem;
    }

    p{
      line-height: 35px;
      letter-spacing: 0.5px;
    }

    &__title{
      color: ${props => props.theme.c_blue};

      text-align: center;

      width: 100%;
      
      margin-bottom: 50px;

      &__logo{
        img{
          width: 40%;
        }
      }

      p{
        font-weight: light;
        font-size: 1.5rem;
        color: ${props => props.theme.c_grey};
      }
    }

    &__main{
      font-size: 1.3rem;

      margin-bottom: 50px;
    }

    &__topics{
      font-size: 1.3rem;

      &__title{
        color: ${props => props.theme.c_blue}
      }

      &__1,
      &__2{
        text-align: start;

        display: flex;
        align-items: center;

        margin: 50px 0;

        h1{
          text-align: start;

          min-width: 30%;
        }
      }

      &--red{
        color: ${props => props.theme.c_red};
      }

      &--green{
        color: ${props => props.theme.c_green};
      }
    }

    &__members{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 50px;

      height: 60vh;

      margin: 50px 0;

      &__title{
        color: ${props => props.theme.c_blue};
      }

      &__member{
        color: inherit;

        display: flex;
        flex-direction: column;
        align-items: center;

        &--1,
        &--2,
        &--3,
        &--4{
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        &--1{
          color: ${props => props.theme.c_green};
        }

        &--2{
          color: ${props => props.theme.c_red};
        }

        &--3{
          color: ${props => props.theme.c_blue};
        }

        &--4{
          color: ${props => props.theme.c_orange};
        }

        p{
          font-weight: bolder;
          font-size: 1.5rem;
        }

        &__img{
          color: black;

          height: 150px;
          width: 150px;

          border-radius: 50%;
          background: white;
        }
      }
    }

    &__dots{
      position: fixed;
      bottom: 0;

      display: flex;
      align-items: center;

      height: 60px;
      width: 60%;

      margin: auto;

      background: white;

      .--active{
        background: ${props => props.theme.c_blue};
      }

      &__dot{
        position: relative;

        height: 20px;
        width: 20px;

        margin: auto;

        border: 3px solid ${props => props.theme.c_blue};
        border-radius: 50%;
        transition: ${props => props.theme.trans};
        cursor: pointer;

        &:hover{
          background: ${props => props.theme.c_blue};
        }

        &:hover .__message{
          opacity: 1;
        }

        .__message{
          color: ${props => props.theme.c_white};
          
          position: absolute;
          right: -80px;
          top: -15px;
          z-index: 2;

          display: flex;
          justify-content: center;
          align-items: center;

          height: auto;
          width: 75px;

          padding: 5px 0;

          opacity: 0;
          border: none;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 5px;
        }
      }
    }
  }

  @media (max-width: 768px){
    min-height: fit-content;

    padding-bottom: 50px;

    .button{
      max-width: 80%;
    }

    .content{
      width: 90%;

      &__title{
        grid-row: 1;
      }

      &__topics{

        &__1,
        &__2{
          flex-direction: column;
        }

        h1{
          min-width: auto;
          margin-right: 20px;
        }
      }

      &__members{
        display: flex;
        flex-direction: column;

        height: auto;

        background: none;
    }

    &__dots{
      width: 100%;
      left: 0;
      right: 0;

      .__message{
        font-size: .8rem;

        top: -50px;
        left: -65px;

        padding: 0px;
      }
    }
  }
}
`

export const Close = styled(AiOutlineClose)`
  color: ${props => props.theme.c_greenAqua};

  position: fixed;
  top: 2%;
  right: 4%;
  z-index: 10;

  height: 50px;
  width: 50px;

  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  transition: ${props => props.theme.trans};
  border-radius: 10px;

  &:hover{
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05)
  }

  @media(max-width: 768px){
    height: 30px;
    width: 30px;
  }
`

export const Icon = styled(ImUser)``