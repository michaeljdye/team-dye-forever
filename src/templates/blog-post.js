import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Gallery from 'react-grid-gallery'

import Layout from '../components/layout'

import { colors } from '../utils'

const builder = imageUrlBuilder({
  projectId: 'j7t5zwvc',
  dataset: 'production',
})

function urlFor(source) {
  return builder.image(source)
}

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <p>{props.children}</p>
      }
    },
  },
}

export default function BlogPost({
  data: {
    sanityPost: { title, _rawBody, gallery },
  },
}) {
  const images = gallery[0]
    ? gallery[0].images.map((image, i) => {
        const width = Math.floor(Math.random() * 400) + 200
        const height = i % 2 === 0 ? width : width - 50
        return {
          src: image.asset.url,
          thumbnail: urlFor(image).width(width).height(height),
          thumbnailWidth: width,
          thumbnailHeight: height,
        }
      })
    : []

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
          <GalleryContainer>
            <Gallery images={images} enableImageSelection={false} margin={2} />
          </GalleryContainer>
        </div>
      </div>
    </Layout>
  )
}

const GalleryContainer = styled.div`
  .ReactGridGallery_tile {
    background-color: transparent !important;
  }
`

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    sanityPost(id: { eq: $id }) {
      id
      title
      _rawBody
      gallery {
        images {
          asset {
            url
            fixed {
              width
              height
            }
          }
        }
      }
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
