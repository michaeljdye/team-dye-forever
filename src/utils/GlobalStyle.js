import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 16px;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "Avenir";
  }

  h1,
  h2,
  h3 {
    color: ${colors.primary}
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 20px;
    color: ${colors.primary};
  }

  a {
    text-decoration: none !important;
  }

   p {
    font-size: 1.025rem;
    letter-spacing: 0.06rem;
    line-height: 1.5rem;
    color: #444;
  }
`
