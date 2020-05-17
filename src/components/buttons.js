import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { colors } from "../utils"

export const ButtonPrimary = ({ children, link }) => (
  <ButtonContainer to={link}>{children}</ButtonContainer>
)

const ButtonContainer = styled(Link)`
  display: block;
  background: ${colors.primary};
  border: none;
  width: fit-content;
  padding: 15px 20px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  color: ${colors.white};
`
