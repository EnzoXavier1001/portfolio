import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body, input, button {
        font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        background-color: ${props => props.theme.colors.background};
    }
`