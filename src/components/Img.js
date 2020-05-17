import React from "react"
import styled from "styled-components"

const Img = ({ src, alt }) => {
  return (
    <ImgContainer>
      <img src={src} alt={alt} />
    </ImgContainer>
  )
}

const ImgContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;

  img {
    max-width: 100%;
  }
`

export default Img
