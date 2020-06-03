import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import { colors } from "../utils"

export default function BlogPost({
  data: {
    sanityPost: { title, _rawBody },
  },
}) {
  console.log(_rawBody)
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
        <h1>{title}</h1>
        <div>
          {_rawBody.map(({ _type, children, asset }) => {
            if (_type === "block") {
              return children.map(child => <p>{child.text}</p>)
            }
          })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    sanityPost(id: { eq: $id }) {
      id
      title
      _rawBody
    }
  }
`
