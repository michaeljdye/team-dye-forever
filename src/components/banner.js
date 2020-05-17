import React from "react"
import styled from "styled-components"

const Banner = props => (
  <BannerContainer {...props}>{props.text}</BannerContainer>
)

const BannerContainer = styled.div`
  background: url(${({ img }) => img}) center center / ${({ width }) => width}
    no-repeat;
  height: 50vh;
`
export default Banner
