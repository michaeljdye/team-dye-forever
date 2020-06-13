import React, { useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostLoop from '../components/post/post-loop'
import Banner from '../components/banner'
import CategoryFilter from '../components/category/category-filter'

import BlogHeroImg from '../images/blog-hero.jpg'

export default function Blog() {
  const [category, setCategory] = useState('all')

  const handleCategoryChange = category => {
    setCategory(category)
  }

  return (
    <Layout>
      <Banner img={BlogHeroImg} width="cover" mbHeight="15vh" />
      <CategoryFilter updateCategory={handleCategoryChange} />
      <BlogContainer>
        <PostLoop currentCategory={category} />
      </BlogContainer>
    </Layout>
  )
}

const BlogContainer = styled.div`
  padding: 60px 0;
`
