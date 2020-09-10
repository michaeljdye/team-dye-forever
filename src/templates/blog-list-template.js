import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import Pagination from '@material-ui/lab/Pagination'
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
  const handlePageChange = (event, value) => {
    const path = value === 1 ? '/' : `/${value}`
    navigate(path)
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
        <PaginationStyled
          count={numPages}
          page={currentPage}
          onChange={handlePageChange}
          color="dark"
          variant="outlined"
          shape="rounded"
          size="medium"
        />
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

const PaginationStyled = styled(Pagination)`
  margin-top: 40px;

  ul {
    justify-content: center;
  }
`

export default BlogList
