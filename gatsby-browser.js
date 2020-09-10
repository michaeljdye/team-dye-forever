/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.shouldUpdateScroll = ({
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
