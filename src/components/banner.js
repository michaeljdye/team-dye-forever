import React from "react"
import styled from "styled-components"

import { below } from "../utils"

const Banner = props => (
  <BannerContainer {...props}>{props.text}</BannerContainer>
)

const BannerContainer = styled.div`
  background: url(${({ img }) => img}) center center /
    ${({ width = "cover" }) => width} no-repeat;
  height: 50vh;

  ${below.tablet`
    height: ${({ mbHeight = "50vh" }) => mbHeight};
  `}
`
export default Banner
