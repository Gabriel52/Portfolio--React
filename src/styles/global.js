import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-smoothing:antialiased;
    }

    button {
        cursor: pointer;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }
    html{
        scroll-behavior: smooth;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: blue orange;
        }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: rgb(161 152 152 / 77%);
    }

    *::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 20px;
        border: 3px solid #6b4798b8;
    }
`