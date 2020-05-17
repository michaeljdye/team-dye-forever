import React from "react"
import styled from "styled-components"

import { colors } from "../utils"

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2020 Joey and Nicole Dye</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background: ${colors.primaryLight};

  p {
    color: ${colors.primary};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 600;
    margin: 10px 0 7px;
    color: ${colors.white};
  }
`

export default Footer
