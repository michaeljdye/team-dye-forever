import React from 'react'
import styled from 'styled-components'

import { colors, below } from '../utils'

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2020 Joey and Nicole Dye</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background: ${colors.dark};

  p {
    max-width: 90%;
    margin: 10px auto;
    color: ${colors.primary};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 600;
    color: ${colors.white};

    ${below.phone`
      font-size: 0.75rem;
    `}
  }
`

export default Footer
