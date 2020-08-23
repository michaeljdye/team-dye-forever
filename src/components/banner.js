import React from 'react'
import styled from 'styled-components'

import { below } from '../utils'

const Banner = ({ text, ...rest }) => (
  <BannerContainer {...rest}>{text}</BannerContainer>
)

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ img }) => img}) center center /
    ${({ width = 'cover' }) => width} no-repeat;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  height: 50vh;
  color: white;
  font-size: 3.5rem;
  font-weight: 700;

  ${below.tablet`
    height: ${({ mbHeight = '50vh' }) => mbHeight};
  `}
`
export default Banner
