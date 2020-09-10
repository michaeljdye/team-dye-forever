import React from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Button } from 'gatsby-theme-material-ui'
import Typography from '@material-ui/core/Typography'

import { ButtonPrimary } from '../buttons'

const builder = imageUrlBuilder({
  projectId: 'j7t5zwvc',
  dataset: 'production',
})

function urlFor(source) {
  return builder.image(source)
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
  center: {
    justifyContent: 'center',
  },
})

const PostCard = ({ id, title, slug, excerpt, image }) => {
  const classes = useStyles()
  console.log(image)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={urlFor(image).url()}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.center}>
        <Button
          to={`/blog/${slug.current}`}
          variant="outlined"
          size="small"
          color="secondary"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PostCard
