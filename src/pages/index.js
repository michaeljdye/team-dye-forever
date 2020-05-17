import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import PostLoop from "../components/post-loop"
import { ButtonPrimary } from "../components/buttons"

import HeroImg from "../images/hero-img.jpg"
import AboutImg from "../images/about-section.jpg"
import PolaroidBanner from "../images/polaroid-banner.jpg"
import WishesForBabyBanner from "../images/wishes-for-baby-banner.jpg"
import GuestBookBanner from "../images/guest-book-banner.jpg"

const IndexPage = () => (
  <Layout>
    <Banner img={HeroImg} width="cover" />
    <AboutSection id="about">
      <AboutVisual>
        <div>
          <img src={AboutImg} alt="Joey, Nicole and baby" />
        </div>
      </AboutVisual>
      <AboutContent>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </AboutContent>
    </AboutSection>
    <CTASection>
      <div>
        <CTAImgContainer>
          <img src={WishesForBabyBanner} alt="Joey, Nicole and baby" />
        </CTAImgContainer>
        <ButtonPrimary>Sign guest book</ButtonPrimary>
      </div>
      <div>
        <CTAImgContainer>
          <img src={GuestBookBanner} alt="Joey, Nicole and baby" />
        </CTAImgContainer>
        <ButtonPrimary>Send wishes for baby</ButtonPrimary>
      </div>
    </CTASection>
    <Banner img={PolaroidBanner} width="cover" />
    <BlogSection>
      <h2>Our Blog</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <PostLoop />
      <ButtonPrimary link="/blog">View All</ButtonPrimary>
    </BlogSection>
    <SEO title="Home" />
  </Layout>
)

const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0 0 0;
`
const AboutVisual = styled.div`
  div {
    width: 400px;
  }

  img {
    max-width: 100%;
  }
`
const AboutContent = styled.div`
  padding: 40px;

  h2,
  p {
    max-width: 600px;
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.025rem;
    -webkit-letter-spacing: 0.06rem;
    -moz-letter-spacing: 0.06rem;
    -ms-letter-spacing: 0.06rem;
    letter-spacing: 0.06rem;
    line-height: 1.8rem;
    color: #444;
  }
`

const CTASection = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0 120px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    margin-bottom: 0;
  }
`

const CTAImgContainer = styled.div`
  width: 600px;
  padding: 40px;
`

const BlogSection = styled.div`
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
