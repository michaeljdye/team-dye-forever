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
import DyeFamilyImg from '../images/dye-family.jpg'

const useStyles = makeStyles(theme => ({
  paper: {
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
      <Hero>
        <img src={DyeFamilyImg} alt="Dye family" />
        <div>
          <Heading>Welcome to our site</Heading>
          <Paragraph>
            A little about us: We’re both extremely techy people who love to
            travel and do nerdy things together (hence why we made this
            website). Nicole is a Creative Director for a marketing agency and
            Joey is a Frontend Developer for the tech company, Campaign Monitor.
            Join us in our journey into parenthood. We’re very excited for
            what's to come next and hope you keep in touch and enjoy our
            updates—we’ll try to keep them as current as life allows.
          </Paragraph>
        </div>
      </Hero>
      <BlogSection>
        <PostLoop posts={edges} />
        <PaginationStyled
          count={numPages}
          page={currentPage}
          onChange={handlePageChange}
          color="secondary"
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

const Hero = styled.div`
  display: flex;
  padding: 60px 0 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  > img {
    margin-right: 40px;
    max-width: 100%;
    width: 350px;
    object-fit: cover;
  }
`

const Heading = styled.h1`
  color: ${colors.primary};
  margin-top: 40px;
`

const Paragraph = styled.p`
  color: ${colors.text};
  font-size: 1rem;
`

const BlogSection = styled.div`
  margin: 0 auto;
  padding: 60px 0;
`

const PaginationStyled = styled(Pagination)`
  margin-top: 40px;

  ul {
    justify-content: center;
  }
`
export default BlogList
