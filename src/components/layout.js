/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import { GlobalStyle } from '../utils'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff00a0',
    },
    secondary: {
      main: '#7a04eb',
    },
    light: {
      main: '#fff',
    },
    dark: {
      main: '#120458',
    },
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <SiteContent>
          <main>{children}</main>
        </SiteContent>
        <Footer />
        <GlobalStyle />
      </LayoutContainer>
    </ThemeProvider>
  )
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const SiteContent = styled.div`
  flex: 1;
  width: 1140px;
  max-width: 90%;
  margin: 0 auto;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
