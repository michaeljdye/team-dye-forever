import { css } from "styled-components"

const sizes = {
  desktop: 992,
  tablet: 1120,
  phone: 576,
}

// Media Queries

export const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css({}, ...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
