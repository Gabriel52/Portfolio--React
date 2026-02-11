import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root {
        --background: #ffffff;
        --color-primary: #6B4798;
        --color-primary-hover: #6b4798b8;
        --color-text-muted: #5A6570;
        --color-text-dark: #4e4039;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
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

`