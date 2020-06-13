import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { below } from '../../utils'

import PostCard from './post-card'

const PostLoop = ({ currentCategory = 'all' }) => {
  const {
    allSanityPost: { edges: posts },
  } = useStaticQuery(GET_ALL_POSTS)

  return (
    <PostCards>
      {posts
        .filter(({ node: { categories } }) =>
          categories.some(
            category =>
              category.title.toLowerCase() === currentCategory.toLowerCase() ||
              currentCategory.toLowerCase() === 'all'
          )
        )
        .map(({ node: { id, title, excerpt, slug, _rawMainImage } }) => (
          <PostCard
            key={id}
            title={title}
            excerpt={excerpt}
            slug={slug}
            image={_rawMainImage}
          />
        ))}
    </PostCards>
  )
}

const GET_ALL_POSTS = graphql`
  query GETAllPosts {
    allSanityPost {
      edges {
        node {
          id
          title
          excerpt
          categories {
            title
          }
          _rawMainImage
          slug {
            _key
            _type
            current
          }
        }
      }
    }
  }
`

const PostCards = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  max-width: 1000px;

  ${below.tablet`
    flex-direction: column;
  `}
`
export default PostLoop
