import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

import { colors } from "../utils"

const shortcodes = { Link } // Provide common components here

export default function BlogPost({ data: { mdx } }) {
  return (
    <Layout>
      <div
        css={`
          width: 1000px;
          max-width: 90%;
          margin: 40px auto;

          p {
            font-size: 1.025rem;
            letter-spacing: 0.06rem;
            line-height: 1.8rem;
            color: ${colors.text};
            margin-bottom: 30px;
          }
        `}
      >
        <h1
          css={`
            text-transform: uppercase;
            letter-spacing: 5px;
            margin-bottom: 20px;
            color: ${colors.primary};
          `}
        >
          {mdx.frontmatter.title}
        </h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
