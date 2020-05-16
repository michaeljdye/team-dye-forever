import React from "react"

import GuestBookForm from "../components/guest-book-form"
import Layout from "../components/layout"
import Banner from "../components/banner"

import GuestBookBannerImg from "../images/guest-book-banner.jpg"

const GuestBook = () => {
  return (
    <Layout>
      <Banner img={GuestBookBannerImg} />
      <GuestBookForm />
    </Layout>
  )
}

export default GuestBook
