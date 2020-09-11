import React from 'react'
import { StaticKitProvider } from '@statickit/react'

//  Add providers
export const wrapRootElement = ({ element }) => (
  <StaticKitProvider site="e54c36be13b4">{element}</StaticKitProvider>
)
