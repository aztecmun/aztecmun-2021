import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body{ margin: 0; padding: 0; }

    body,
    input, 
    button,
    select, 
    textarea{ font: 400 1rem 'Roboto Condensed', sans-serif; color: #000;}

    html, body, #root { height: 100% }
`
export default GlobalStyle
