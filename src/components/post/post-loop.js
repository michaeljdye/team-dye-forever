import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import PostCard from './post-card'

const PostLoop = ({ posts }) => (
  <PostCards>
    {posts.map(({ node: { id, title, excerpt, slug, _rawMainImage } }) => (
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

const PostCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
`
export default PostLoop
