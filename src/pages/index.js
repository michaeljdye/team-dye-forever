import React from "react"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"

import Hero from "../images/hero-img.jpg"

const IndexPage = () => (
  <Layout>
    <Banner img={Hero} />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
