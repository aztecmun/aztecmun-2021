import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ImUser } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'

export const ComContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100%;

  padding-bottom: 50px;

  .video{
    height: 50vh;
    width: 100%;
  }

  .div{
    width: 100%;
    height: 60px;

    margin-bottom: 50px;
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
        gap: 50px;

        margin: 50px auto;
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

      background-image: url('/svg/miembros_bg.svg');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      &__title{
        color: ${props => props.theme.c_blue};
      }

      &__member{
        color: inherit;

        display: flex;
        flex-direction: column;
        align-items: center;

        p{
          font-weight: bolder;
          font-size: 1.2rem;
        }

        &__img{
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
          right: -500%;
          top: -15px;

          height: auto;
          width: auto;

          padding: 5px;
          margin-left: -50%;

          opacity: 0;
          border: none;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 5px;
        }
      }
    }
  }

  @media (max-width: 768px){
    .content{
      width: 90%;

      &__title{
        grid-row: 1;
      }

      &__members{
        display: flex;
        flex-direction: column;

        background: none;

        &--1{ color: ${props => props.theme.c_red}; }
        &--2{ color: ${props => props.theme.c_green}; }
        &--3{ color: ${props => props.theme.c_blue}; }
        &--4{ color: ${props => props.theme.c_orange}; }
      }

      &__dots{
        width: 100%;
        left: 0;
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

  @media(max-width: 768px){
    height: 30px;
    width: 30px;
  }
`

export const Icon = styled(ImUser)``