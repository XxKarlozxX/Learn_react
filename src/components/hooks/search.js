import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 6px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SearchField(props) {
  const classes = useStyles();
  const [movieName, setMovieName] = React.useState('');

  function handleClick(e) {
    e.preventDefault();
    props.movieTitle(movieName);
  }

  function handleChange(e) {
    const name = e.target.value;
    const queryName = name.replace( ' ', '+' );

    setMovieName(queryName);
  }
  
  return (
      <Paper component="form" className={classes.root} elevation={3}>
        <InputBase
          className={classes.input}
          placeholder="Search"
          onChange={(e) => handleChange(e)}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          onClick={e => handleClick(e,props)}>
            <SearchIcon />
        </IconButton>
      </Paper>
    
  );
}
