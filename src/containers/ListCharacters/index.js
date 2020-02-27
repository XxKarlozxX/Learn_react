import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  button: {
    margin: theme.spacing(1),
  },
  secondary: {
    color: theme.secondary
  }
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { name, image, status, species, origin } = props.character;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Rick and Morty Character"
          height="200"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <List>
          <ListItem role={undefined} dense button >
            <ListItemText primary='Estatus' />
            <ListItemSecondaryAction className={classes.secondary}>
              {status}
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem role={undefined} dense button >
            <ListItemText primary='Especie' />
            <ListItemSecondaryAction className={classes.secondary}>
              {species}
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem role={undefined} dense button >
            <ListItemText primary='Origen' />
            <ListItemSecondaryAction className={classes.secondary}>
              {origin.name}
            </ListItemSecondaryAction>
          </ListItem>

         </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<DeleteIcon />}
            value={name}
            onClick={props.handleRemove}
          >
            Delete
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
