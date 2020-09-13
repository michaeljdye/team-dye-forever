import React from 'react'
import styled from 'styled-components'
import PostCard from './post-card'
import { below } from '../../utils'

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
  max-width: 100%;

  ${below.phone`
      grid-template-columns: 1fr;
  `}
`
export default PostLoop
