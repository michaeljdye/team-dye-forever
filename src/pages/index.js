import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Banner from '../components/banner'
import SEO from '../components/seo'
import PostLoop from '../components/post/post-loop'
import { ButtonPrimary } from '../components/buttons'
import { below } from '../utils'

import NashvilleImg from '../images/nashville.jpg'
import GuestBookBannerImg from '../images/guest-book-banner.jpg'

const IndexPage = () => (
  <Layout>
    <Banner
      img={NashvilleImg}
      text="Our lives together."
      width="cover"
      mbHeight="15vh"
    />
    <BlogSection>
      <PostLoop />
    </BlogSection>
    <SEO title="Home" />
  </Layout>
)

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
