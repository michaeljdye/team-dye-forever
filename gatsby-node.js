const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            id
            slug {
              _key
              _type
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allSanityPost.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug.current}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: { id: node.id },
    })
  })
}
