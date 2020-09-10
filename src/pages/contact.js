import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@statickit/react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Layout from '../components/layout'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const Contact = () => {
  const [state, handleSubmit] = useForm('contactForm')
  const classes = useStyles()

  if (state.succeeded) {
    return <p>Thanks! We'll be in touch.</p>
  }

  return (
    <Layout>
      <ContactHeading>Contact us!</ContactHeading>
      <FormSection>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField id="standard-basic" label="Name" name="name" />
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              name="email"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              rows={4}
              multiline
              name="message"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </FormSection>
    </Layout>
  )
}

const ContactHeading = styled.h1`
  margin: 40px auto 0;
  text-align: center;
`

const FormSection = styled.div`
  display: flex;
  justify-content: center;
`

export default Contact
