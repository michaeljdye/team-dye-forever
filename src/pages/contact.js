import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { useForm, ValidationError } from '@statickit/react'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Layout from '../components/layout'

const useStyles = makeStyles(theme => ({
  root: {
    transform: 'translateX(-50%)',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    width: 400,
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
            <TextField label="Name" name="name" className={classes.textField} />
          </div>
          <div>
            <TextField
              label="Email"
              name="email"
              className={classes.textField}
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
              className={classes.textField}
            />
          </div>
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
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
