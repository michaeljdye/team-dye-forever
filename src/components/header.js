import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo.png"

import { below } from "../utils"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link to="/">
      <ImgContainer>
        <img src={Logo} alt="Joey and Nicole" />
      </ImgContainer>
    </Link>
    <Nav>
      <li>
        <Link to="/guest-book">Guest Book</Link>
      </li>
      <li>
        <Link to="/#about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </Nav>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: linear-gradient(
    -45deg,
    rgb(151, 203, 185) 0%,
    rgb(205, 230, 224) 100%
  );
  padding: 1rem 4rem;
  height: 80px;
  display: flex;
  align-items: center;

  ${below.phone`
    justify-content: center;
    padding: 1rem 10px;
  `}

  ${below.phone`
    height: 150px;
  `}

  img {
    max-width: 100%;
    margin-bottom: 0;
  }
`

const Nav = styled.nav`
  list-style: none;
  display: inherit;
  margin: 0 0 0 auto;
  text-transform: uppercase;
  letter-spacing: 5px;

  ${below.phone`
      margin: 0 auto;
  `}

  li {
    &:not(:last-of-type) {
      margin-right: 80px;

      ${below.phone`
        margin-right: 10px;
      `}
    }
  }

  a {
    color: white;
    text-decoration: none;
    padding: 5px;
    font-size: 1.125rem;
    font-weight: 600;

    ${below.phone`
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 1.2;
    `}
  }
`

const ImgContainer = styled.div`
  width: 150px;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
