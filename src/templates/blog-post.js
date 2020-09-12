import React from 'react'
import styled from 'styled-components'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from 'simple-react-lightbox'
import { graphql } from 'gatsby'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Layout from '../components/layout'
import { colors } from '../utils'
import { light } from '@material-ui/core/styles/createPalette'

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
    ? gallery[0].images.map(image => ({
        src: urlFor(image).width(400).height(400),
      }))
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
          <SimpleReactLightbox>
            <Gallery>
              <SRLWrapper>
                {images &&
                  images.map(({ src }) => (
                    <li>
                      <img src={src} alt="" />
                    </li>
                  ))}
              </SRLWrapper>
            </Gallery>
          </SimpleReactLightbox>
        </div>
      </div>
    </Layout>
  )
}

const Gallery = styled.ul`
  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
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
