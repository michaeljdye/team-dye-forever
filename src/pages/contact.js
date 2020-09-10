import React from 'react'
import styled from 'styled-components'
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
  const classes = useStyles()

  return (
    <Layout>
      <ContactHeading>Contact us!</ContactHeading>
      <FormSection>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField id="standard-basic" label="Name" />
            <TextField id="filled-basic" label="Email" variant="filled" />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              rows={4}
              multiline
            />
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
