import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{ text-decoration: none; color: inherit; margin: 0; padding: 0; box-sizing: border-box; ::-webkit-scrollbar{width: 0px;}  }

    body,
    input, 
    button,
    select, 
    textarea{ font: 400 1rem 'Roboto Condensed', sans-serif; color: #000;}

    html, body, #root { height: 100%; }
`
export default GlobalStyle
