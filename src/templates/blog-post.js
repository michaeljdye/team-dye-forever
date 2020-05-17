import React from "react"
import { css } from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        css={`
          max-width: 1000px;
          margin: 40px auto;
        `}
      >
        <h1
          css={`
            text-transform: uppercase;
            letter-spacing: 5px;
            margin-bottom: 20px;
            color: rgb(217, 159, 154);
          `}
        >
          {post.frontmatter.title}
        </h1>
        <div
          css={`
            p {
              font-size: 1.025rem;
              letter-spacing: 0.06rem;
              line-height: 1.8rem;
              color: rgb(68, 68, 68);
              margin-bottom: 30px;
            }
          `}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
