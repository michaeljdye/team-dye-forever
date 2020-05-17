import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import PostLoop from "../components/post-loop"

export default function Blog() {
  return (
    <Layout>
      <BlogContainer>
        <PostLoop />
      </BlogContainer>
    </Layout>
  )
}

const BlogContainer = styled.div`
  padding: 60px 0;
`
