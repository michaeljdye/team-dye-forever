import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostLoop from '../components/post/post-loop'
import { below } from '../utils'

const BlogList = ({
  data: {
    allSanityPost: { edges },
  },
  pathContext: { currentPage, numPages },
}) => {
  const getPageNums = () => {
    const pageNums = []
    for (let i = 1; i <= numPages; i++) {
      pageNums.push(
        <li>
          <Link to={`/${i === 1 ? '' : i}`}>{i}</Link>
        </li>
      )
    }
    return pageNums
  }

  return (
    <Layout>
      <Banner>
        <h1>Welcome to our site</h1>
        <p>
          A little about us: We’re both extremely techy people who love to
          travel and do nerdy things together (hence why we made this website).
          Nicole is a Creative Director for a marketing agency and Joey is a
          Frontend Developer for the tech company, Campaign Monitor. Join us in
          our journey into parenthood. We’re very excited for what's to come
          next and hope you keep in touch and enjoy our updates—we’ll try to
          keep them as current as life allows.
        </p>
      </Banner>
      <BlogSection>
        <PostLoop posts={edges} />
        {currentPage !== 1 && (
          <Link to={`/${currentPage === 2 ? '' : currentPage - 1}`}>
            Previous page
          </Link>
        )}
        <PageNums>{getPageNums()}</PageNums>
        {currentPage !== numPages && (
          <Link to={`/${currentPage + 1}`}>Next page</Link>
        )}
      </BlogSection>
      <SEO title="Home" />
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int, $limit: Int) {
    allSanityPost(skip: $skip, limit: $limit) {
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

const Banner = styled.div`
  padding: 60px 0 0 0;
  h1 {
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
  }
`

const BlogSection = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 60px 0;

  h2,
  p {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  a {
    margin: 0 auto;
  }

  p {
    font-size: 1.025rem;
    -webkit-letter-spacing: 0.06rem;
    -moz-letter-spacing: 0.06rem;
    -ms-letter-spacing: 0.06rem;
    letter-spacing: 0.06rem;
    line-height: 1.8rem;
    color: #444;
    margin: 0 auto 40px;
  }
`

const PageNums = styled.ul`
  display: flex;
  list-style: none;

  li + li {
    margin-left: 10px;
  }
`

export default BlogList
