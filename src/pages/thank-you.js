import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Banner from "../components/banner"

import ItsAGirlImg from "../images/blogs/he-or-she/its-a-girl.jpg"

const ThankYou = () => {
  return (
    <Layout>
      <ThankYouContainer>
        <h1>Thank you!</h1>
        <p>
          We appreciate your kind words and look forward to sharing them with
          our little one once they get older.
        </p>
        <Banner img={ItsAGirlImg} width="contain" />
      </ThankYouContainer>
    </Layout>
  )
}

const ThankYouContainer = styled.div`
  width: 750px;
  max-width: 90%;
  margin: 0 auto;
  padding: 60px 0;

  h1,
  p {
    text-align: center;
  }

  p {
    margin-bottom: 40px;
  }
`

export default ThankYou
