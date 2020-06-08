import React from 'react'
import { graphql, Link } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import Layout from '../components/layout'

import { colors } from '../utils'

const serializers = {
  types: {
    block(props) {
      console.log(props)
      switch (props.node.style) {
        default:
          return <p>{props.children}</p>
      }
    },
  },
}

export default function BlogPost({
  data: {
    sanityPost: { title, _rawBody },
  },
}) {
  return (
    <Layout>
      <div
        css={`
          width: 800px;
          max-width: 90%;
          margin: 40px auto;

          p {
            max-width: 800px;
            margin-bottom: 30px;
            font-size: 1.025rem;
            letter-spacing: 0.06rem;
            line-height: 1.8rem;
            color: ${colors.text};
          }

          figure {
            margin: 0;
          }

          img {
            width: 800px;
            max-width: 100%;
          }
        `}
      >
        <h1>{title}</h1>
        <div>
          <BlockContent
            blocks={_rawBody}
            serializers={serializers}
            projectId="j7t5zwvc"
            dataset="production"
          />
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
      body {
        _key
        _type
        sanityChildren {
          _key
          _type
          marks
          text
          __typename
        }
        style
        list
        __typename
      }
    }
  }
`
