import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import PostLoop from "../components/post-loop"
import Banner from "../components/banner"

import BlogHeroImg from "../images/blog-hero.jpg"

export default function Blog() {
  return (
    <Layout>
      <Banner img={BlogHeroImg} width="cover" />
      <BlogContainer>
        <PostLoop />
      </BlogContainer>
    </Layout>
  )
}

const BlogContainer = styled.div`
  padding: 60px 0;
`
