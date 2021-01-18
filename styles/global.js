import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    color: inherit;
}   
html, body {
    font-family: helvetica;

    -webkit-user-select: none;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb{
        width: 8px;

        background: #929292;
        border-radius: 10px;
    }
}
`
export default GlobalStyle
