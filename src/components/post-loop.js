import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { ButtonPrimary } from "../components/buttons"
import { below } from "../utils"

const PostLoop = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              slug
              featuredImage {
                id
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMdx

  return (
    <BlogCards>
      {posts.map(({ node }) => (
        <BlogCard key={node.id}>
          <div>
            <Img
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              style={{ width: "100%", height: 200 }}
            />
          </div>
          <div>
            <Link to={`blog/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
            <ButtonPrimary link={`blog/${node.frontmatter.slug}`}>
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
  box-shadow: 0px 0px 26px 6px #e2e2e2;
  padding: 0px 0px 40px;
  margin: 0 auto;

  ${below.tablet`
    &:not(:first-of-type) {
      margin-top: 40px;
    }
  `}

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
