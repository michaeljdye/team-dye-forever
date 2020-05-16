import React from "react"
import styled from "styled-components"

import WishesForBabyBannerImg from "../images/wishes-for-baby-banner.jpg"

const GuestBookForm = () => (
  <FormContainer
    name="contact"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    action="/"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label>
      Name
      <input type="text" name="Name" />
    </label>
    <label>
      Message for parents <input type="text" name="Message for parents" />
    </label>
    <img src={WishesForBabyBannerImg} alt="hi" />
    <label>
      I hope that you learn
      <input type="text" name="I hope that you learn" />
    </label>
    <label>
      I hope that you aren't afraid
      <input type="text" name="I hope that you aren't afraid" />
    </label>
    <label>
      I hope you love
      <input type="text" name="I hope you love" />
    </label>
    <label>
      I hope you get
      <input type="text" name="I hope you get" />
    </label>
    <label>
      I hope you laugh
      <input type="text" name="I hope you laugh" />
    </label>
    <label>
      I hope you never forget
      <input type="text" name="I hope you never forget" />
    </label>
    <label>
      I hope you ignore
      <input type="text" name="I hope you ignore" />
    </label>
    <label>
      I hope you become
      <input type="text" name="I hope you become" />
    </label>
    <label>
      I hope you respect
      <input type="text" name="I hope you respect" />
    </label>
    <label>
      I hope you grow
      <input type="text" name="I hope you grow" />
    </label>
    <button type="submit">Submit</button>
  </FormContainer>
)

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  button {
    display: block;
    background: black;
    border: none;
    text-align: center;
    box-sizing: border-box;
    color: white;
    text-decoration: none;
    padding: 10px 25px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
  }
`

export default GuestBookForm
