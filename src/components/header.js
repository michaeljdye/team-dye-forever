import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img src={Logo} alt="Joey and Nicole" width="200" />
    </Link>
    <Nav>
      <li>
        <Link
          style={{ color: `white`, textDecoration: `none`, padding: `5px` }}
          to="/guest-book"
        >
          Guest Book
        </Link>
      </li>
      <li>
        <Link
          style={{ color: `white`, textDecoration: `none`, padding: `5px` }}
          to="/blog"
        >
          Blog
        </Link>
      </li>
    </Nav>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: linear-gradient(
    -45deg,
    rgb(151, 203, 185) 0%,
    rgb(205, 230, 224) 100%
  );
  padding: 0.5rem;
  height: 80px;
  display: flex;
  align-items: center;

  img {
    margin-bottom: 0;
  }
`

const Nav = styled.nav`
  list-style: none;
  display: inherit;
  padding: 5px;
  margin: 0 0 0 auto;

  a {
    font-size: 1.125rem;
    font-weight: 600;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
