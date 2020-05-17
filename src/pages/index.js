import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import PostLoop from "../components/post-loop"
import { ButtonPrimary } from "../components/buttons"
import { below } from "../utils"

import HeroImg from "../images/hero-img.jpg"
import AboutImg from "../images/about-section.jpg"
import PolaroidBanner from "../images/polaroid-banner.jpg"
import WishesForBabyBannerImg from "../images/wishes-for-baby-banner.jpg"
import GuestBookBannerImg from "../images/guest-book-banner.jpg"

const IndexPage = () => (
  <Layout>
    <Banner img={HeroImg} width="cover" mbHeight="15vh" />
    <AboutSection id="about">
      <AboutVisual>
        <div>
          <img src={AboutImg} alt="Joey, Nicole and baby" />
        </div>
      </AboutVisual>
      <AboutContent>
        <h2>About Us</h2>
        <p>
          A little about us: We’re both extremely techy people who love to
          travel and do nerdy things together (hence why we made this website).
          Nicole is a Creative Director for a marketing agency and Joey is a
          Frontend Developer for the tech company, Campaign Monitor. Join us in
          our journey into parenthood. We’re very excited for what's to come
          next and hope you keep in touch and enjoy our updates—we’ll try to
          keep them as current as life allows.
        </p>
      </AboutContent>
    </AboutSection>
    <CTASection>
      <div>
        <CTAImgContainer>
          <img src={WishesForBabyBannerImg} alt="Joey, Nicole and baby" />
        </CTAImgContainer>
        <ButtonPrimary link="/guest-book">Sign guest book</ButtonPrimary>
      </div>
      <div>
        <CTAImgContainer>
          <img src={GuestBookBannerImg} alt="Joey, Nicole and baby" />
        </CTAImgContainer>
        <ButtonPrimary link="/guest-book">Send wishes for baby</ButtonPrimary>
      </div>
    </CTASection>
    <Banner img={PolaroidBanner} width="cover" />
    <BlogSection>
      <h2>Our Blog</h2>
      <p>
        Check out our blog as we document our journey of becoming new parents.
      </p>
      <PostLoop />
      <ButtonPrimary link="/blog">View All</ButtonPrimary>
    </BlogSection>
    <SEO title="Home" />
  </Layout>
)

const AboutSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 60px 0 0 0;
`
const AboutVisual = styled.div`
  div {
    max-width: 400px;
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
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 0 120px;

  ${below.phone`
    padding-top: 0;
  `}

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > div:last-of-type {
    padding-top: 20px;
  }

  img {
    max-width: 100%;
    margin-bottom: 0;
  }
`

const CTAImgContainer = styled.div`
  max-width: 600px;
  padding: 40px;
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
