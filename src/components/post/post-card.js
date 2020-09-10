import React from 'react'
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
    height: 200,
  },
  center: {
    justifyContent: 'center',
  },
})

const PostCard = ({ id, title, slug, excerpt, image }) => {
  const classes = useStyles()

  const withCharLimit = (text, limit) =>
    text
      .split(' ')
      .filter((word, i) => (i <= limit ? true : false))
      .join(' ')

  return (
    <Card className={classes.root}>
      <Link to={`/blog/${slug.current}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlFor(image).url()}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {withCharLimit(title, 8)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {withCharLimit(excerpt, 20)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
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
