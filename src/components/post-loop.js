import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { ButtonPrimary } from "../components/buttons"

const PostLoop = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <BlogCards>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogCard key={node.id}>
          <div>
            <Img
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              style={{ width: "100%", height: 200 }}
            />
          </div>
          <div>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
            <ButtonPrimary link={node.fields.slug}>Read More</ButtonPrimary>
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
`

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 26px 6px #e2e2e2;
  padding: 0px 0px 40px;

  h3 {
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #d99f9a;
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
