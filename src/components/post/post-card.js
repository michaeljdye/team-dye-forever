import React from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'gatsby'

import { ButtonPrimary } from '../buttons'

const builder = imageUrlBuilder({
  projectId: 'j7t5zwvc',
  dataset: 'production',
})

function urlFor(source) {
  return builder.image(source)
}

const PostCard = ({ id, title, slug, excerpt, image }) => (
  <Card key={id}>
    <img src={urlFor(image).url()} alt="" />
    <CardHeader>
      <Link to={`/blog/${slug.current}`}>
        <h3>{title}</h3>
      </Link>
      <p>{`${excerpt.split(' ').slice(0, 20).join(' ')}...`}</p>
      {/* <p>{excerpt}</p> */}
    </CardHeader>
  </Card>
)

const Card = styled.article`
  display: grid;
  background-color: white;
  border-radius: 9px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  line-height: 1.5;

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
  }
`

const CardHeader = styled.header`
  padding: 24px;

  a {
    text-decoration: none;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-weight: 100;
    margin-bottom: 0;
  }
`

export default PostCard
