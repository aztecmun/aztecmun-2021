import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'sanspro' ;
    src: url('/SourceSansPro-Regular.ttf') format('truetype');
}

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
    font-family: sanspro;
}
`;

export default GlobalStyle;