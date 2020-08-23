import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Logo from '../images/logo.png'

import { below } from '../utils'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link to="/">
      <LogoContainer>Team Dye Forever</LogoContainer>
    </Link>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #563594;
  padding: 1rem 4rem;
  height: 80px;

  ${below.tablet`
    flex-direction: column;
    padding: 1rem 10px;
  `}

  ${below.tablet`
    height: 150px;
  `}

  img {
    max-width: 100%;
    margin-bottom: 0;
  }
`

const LogoContainer = styled.div`
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
