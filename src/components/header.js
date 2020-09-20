import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button, Link } from 'gatsby-theme-material-ui'
import PropTypes from 'prop-types'
import { colors } from '../utils/colors'
import React from 'react'
import logo from '../images/logo-yellow.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0 0 0',
    padding: 0,
    color: colors.light,
    fontSize: '1.5rem',
  },
  button: {
    color: colors.light,
    borderWidth: 2,
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="sticky" style={{ background: colors.secondary }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.logoLink} to="/">
              <Logo src={logo} alt="Team Dye Forever" />
            </Link>
          </Typography>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            to="/contact"
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

const Logo = styled.img`
  width: 180px;
  max-width: 100%;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
