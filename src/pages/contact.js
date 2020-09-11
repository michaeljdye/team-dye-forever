import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { useForm } from '@statickit/react'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Layout from '../components/layout'

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    maxWidth: '90%',
    '& > *': {
      marginBottom: 20,
    },
  },
  button: {
    marginTop: 20,
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
            <TextField label="Name" name="name" fullWidth />
          </div>

          <TextField fullWidth label="Email" name="email" />
          <div>
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              rows={4}
              multiline
              name="message"
              fullWidth
            />

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.button}
            >
              Submit
            </Button>
          </div>
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
