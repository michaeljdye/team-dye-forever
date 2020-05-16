import React from "react"
import styled from "styled-components"

const Banner = props => (
  <BannerContainer props={props}>{props.text}</BannerContainer>
)

const BannerContainer = styled.div`
  background: url(${({ props }) => props.img}) center center no-repeat;
  height: 50vh;
`
export default Banner
