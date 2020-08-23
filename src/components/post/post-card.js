import React from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'gatsby'

import { below } from '../../utils'
import { ButtonPrimary } from '../buttons'

const builder = imageUrlBuilder({
  projectId: 'j7t5zwvc',
  dataset: 'production',
})

function urlFor(source) {
  return builder.image(source)
}

const PostCard = ({ id, title, slug, excerpt, image }) => (
  <PostCardWrapper key={id}>
    <div>
      <img src={urlFor(image).url()} alt="" />
    </div>
    <div>
      <Link to={`/blog/${slug.current}`}>
        <h3>{title}</h3>
      </Link>
      <p>{`${excerpt.split(' ').slice(0, 20).join(' ')}...`}</p>
      {/* <p>{excerpt}</p> */}
      <ButtonPrimary link={`/blog/${slug.current}`}>Read More</ButtonPrimary>
    </div>
  </PostCardWrapper>
)

const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  width: 750px;
  box-shadow: 0px 0px 26px 6px #e2e2e2;
  padding: 0px 0px 40px;
  margin: 0 auto;

  &:not(:first-of-type) {
    margin-top: 40px;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center center;
  }

  h3 {
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #d99f9a;
    padding-top: 20px;
  }

  p {
    font-size: 1.025rem;
    text-align: center;
    letter-spacing: 0.06rem;
    line-height: 1.8rem;
    color: #444;
    margin: 0 auto 40px;
  }

  a {
    text-decoration: none;
    margin: 0 auto;
  }

  &:not(:last-of-type) {
    margin-right: 40px;
    margin-right: auto;
  }

  > div:first-of-type {
    height: 100%;
    width: 100%;
  }

  div:last-of-type {
    padding: 0 15px;

    a {
      margin: 0 auto;
    }
  }

  h3 {
    text-align: center;
  }
`

export default PostCard
