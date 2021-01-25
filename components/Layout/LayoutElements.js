import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  overflow: hidden;
`

export const LayoutContainer = styled.div`
  height: calc(100vh - 8rem);
  width: 100vw;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`
