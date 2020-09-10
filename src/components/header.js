import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button, Link } from 'gatsby-theme-material-ui'
import PropTypes from 'prop-types'
import { colors } from '../utils/colors'
import React from 'react'

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
  logo: {
    color: colors.light,
    fontSize: '1.5rem',
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.logo} to="/">
              Team Dye Forever
            </Link>
          </Typography>
          <Button variant="contained" color="primary" to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
