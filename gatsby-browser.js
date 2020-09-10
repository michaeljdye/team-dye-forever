import React from 'react'
import { StaticKitProvider } from '@statickit/react'

//  Add providers
export const wrapRootElement = ({ element }) => (
  <StaticKitProvider site="e54c36be13b4">{element}</StaticKitProvider>
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
