import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostLoop from '../components/post/post-loop'
import { below } from '../utils'

const IndexPage = () => (
  <Layout>
    <Banner>
      <h1>Welcome to our site</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        pulvinar magna felis, et maximus orci porta eu. Nunc nec suscipit nulla.
        Phasellus sed nunc sit amet augue aliquam ornare. Suspendisse congue,
        eros molestie convallis sagittis, dui purus pulvinar velit, vitae
        efficitur lorem magna at orci. Sed eu ante sed odio facilisis faucibus.
      </p>
    </Banner>
    <BlogSection>
      <PostLoop />
    </BlogSection>
    <SEO title="Home" />
  </Layout>
)

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

export default IndexPage
