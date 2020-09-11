import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostLoop from '../components/post/post-loop'
import { colors } from '../utils'

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: colors.dark,
    padding: 20,
    marginTop: 40,
  },
}))

const BlogList = ({
  data: {
    allSanityPost: { edges },
  },
  pageContext: { currentPage, numPages },
}) => {
  const classes = useStyles()
  const handlePageChange = (event, value) => {
    const path = value === 1 ? '/' : `/${value}`
    navigate(path)
  }

  return (
    <Layout>
      <Paper className={classes.paper} elevation={2}>
        <Heading>Welcome to our site</Heading>
        <Paragraph>
          A little about us: We’re both extremely techy people who love to
          travel and do nerdy things together (hence why we made this website).
          Nicole is a Creative Director for a marketing agency and Joey is a
          Frontend Developer for the tech company, Campaign Monitor. Join us in
          our journey into parenthood. We’re very excited for what's to come
          next and hope you keep in touch and enjoy our updates—we’ll try to
          keep them as current as life allows.
        </Paragraph>
      </Paper>
      <BlogSection>
        <PostLoop posts={edges} />
        <PaginationStyled
          count={numPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="circle"
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

const Heading = styled.h1`
  color: ${colors.light};
`

const Paragraph = styled.p`
  color: ${colors.light};
  font-size: 1.125rem;
  font-weight: 700;
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
