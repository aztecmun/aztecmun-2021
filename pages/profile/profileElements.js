import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;

  padding: 5rem 2rem;

  background: #141518;
`

export const ProfileContainer = styled.div`
  color: #EDEDED;

  display: flex;

  height: 100%;
  width: 100%;

  @media (max-width: 768px){
    flex-direction: column;
  }
`

export const ProfilePic = styled.div`
  flex: 2;

  border: 1px solid blue;

  .pic{
    color: #EDEDED;

    width: 100%;
    height: 400px;

    margin-bottom: 20px;

    background: #1f2125;
    border-radius: 20px;
  }
`

export const ProfileInfo = styled.div`
  flex: 6;

  padding: 2rem;

  border: 1px solid blue;

  .top{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    .name{
      font-size: 2rem;
    }

    .school{
      color: #a8a8a8;
      font-size: 1.2rem;
      align-self: flex-end;

      display: flex;
      gap: 2px;

      margin-left: 20px;
    }

    .committee{
      font-size: 1.2rem;
      color: #45ADFF;
    }
  }
`