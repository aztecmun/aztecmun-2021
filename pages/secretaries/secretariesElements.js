import styled from 'styled-components'

export const SecWrapper = styled.div`
  color: ${props => props.theme.text};

  display: flex;
  flex-direction: column;

  min-height: 100%;
  width: 100%;

  padding: 60px 0;

  background: ${props => props.theme.body_bg1};


  .header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 40%;
    width: 100%;

    padding: 3rem;

    background: ${props => props.theme.body_bg2};

    .header-title{
      font-size: 4rem;
      text-transform: capitalize;
      color: ${props => props.theme.blue};

      justify-self: flex-start;
      align-self: flex-start;

      @media (min-width: 320px) and (max-width: 768px){
        font-size: 3rem;
      }

      .header-info{
        font-size: 1.5rem;

        justify-self: flex-end;
        align-self: center;

        border: 1px solid red;
      }
    }
  }

  .main{
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 40px;

    height: 60%;

    padding: 3rem;

    .main-info{}

    .memebers{}

    span{
        color: ${props => props.theme.blue};

        display: block;

        margin-bottom: 20px;
      }
  }
`