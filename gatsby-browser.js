import React from 'react'
import { StaticKitProvider } from '@statickit/react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#41ead4',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ff206e',
    },
    light: {
      main: '#fff',
    },
    dark: {
      main: '#0b132b',
    },
  },
})

//  Add providers
export const wrapRootElement = ({ element }) => (
  <StaticKitProvider site="e54c36be13b4">
    <ThemeProvider theme={theme}>{element} </ThemeProvider>
  </StaticKitProvider>
)

// You can delete this file if you're not using it
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const slug = location.pathname.split('').pop()
  console.log('slug', typeof +slug)
  if (typeof +slug === 'number' || slug === '/') {
    return false
  }

  return true
}
