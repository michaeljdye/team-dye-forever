import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'

import { ButtonPrimary } from '../components/buttons'
import { below } from '../utils'

const builder = imageUrlBuilder({
  projectId: 'j7t5zwvc',
  dataset: 'production',
})

function urlFor(source) {
  return builder.image(source)
}

const PostLoop = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityPost {
          edges {
            node {
              id
              title
              excerpt
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
  )

  const { edges: posts } = data.allSanityPost

  return (
    <BlogCards>
      {posts.map(({ node: { id, title, excerpt, slug, _rawMainImage } }) => (
        <BlogCard key={id}>
          <div>
            <img src={urlFor(_rawMainImage).url()} />
          </div>
          <div>
            <Link to={`blog/${slug.current}`}>
              <h3>{title}</h3>
            </Link>
            <p>{`${excerpt.split(' ').slice(0, 20).join(' ')}...`}</p>
            {/* <p>{excerpt}</p> */}
            <ButtonPrimary link={`blog/${slug.current}`}>
              Read More
            </ButtonPrimary>
          </div>
        </BlogCard>
      ))}
    </BlogCards>
  )
}

const BlogCards = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  max-width: 1000px;

  ${below.tablet`
    flex-direction: column;
  `}
`

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  width: 350px;
  box-shadow: 0px 0px 26px 6px #e2e2e2;
  padding: 0px 0px 40px;
  margin: 0 auto;

  ${below.tablet`
    &:not(:first-of-type) {
      margin-top: 40px;
    }
  `}

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center center;
  }

  h3 {
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #d99f9a;

    ${below.tablet`
      padding-top: 20px;
    `}
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

    ${below.tablet`
      margin-right: auto;
    `}
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
export default PostLoop
