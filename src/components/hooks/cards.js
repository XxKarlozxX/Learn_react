import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  main: {
    textAlign: "left"
  },
  media: {
    height: 0,
    paddingTop: '120%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section2: {
    margin: theme.spacing(2),
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Actors = props.movieData.Actors;
  const Genres = props.movieData.Genre;

  return (
    <Card className={classes.root} >
      <CardMedia
        className={classes.media}
        image={props.movieData.Poster}
        title={props.movieData.Title}
        id={props.movieName}
        />
      <CardContent>
        <Typography gutterBottom variant="h4">
          {props.movieData.Title}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {props.movieData.Plot}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <div className={classes.section2}>
          <Typography gutterBottom variant="body1">
            Direction
          </Typography>
          <div>
            <Chip className={classes.chip} color="primary" label={props.movieData.Director} />
            <Chip className={classes.chip} label={props.movieData.Country} />
          </div>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LocalMoviesIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider variant="middle" />
          <Typography gutterBottom component="div"> 
            <Typography variant="h5">
              Actors
            </Typography>
            <List component="nav" className={classes.list} aria-label="contacts">
              { Actors.split(", ").map( actor => {
                return (
                  <ListItem key={actor} button>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={actor} />
                  </ListItem>
                );
              }) }
            </List>
          </Typography>
          <Divider variant="middle" />
          <div className={classes.section2}>
            <Typography gutterBottom variant="body1">
              Genres
            </Typography>
            { Genres.split(", ").map( genre => {
              return <Chip key={genre} label={genre} className={classes.chip} />
            }) }
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
