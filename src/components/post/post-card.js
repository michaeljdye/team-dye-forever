import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const builder = imageUrlBuilder({
  projectId: 'j7t5zwvc',
  dataset: 'production',
})

function urlFor(source) {
  return builder.image(source)
}

const useStyles = makeStyles({
  actionArea: {
    height: '100%',
  },
  root: {
    maxWidth: 345,
    height: '100%',
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
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.root}>
        <Link to={`/blog/${slug.current}`}>
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
        </Link>
      </Card>
    </CardActionArea>
  )
}

export default PostCard
