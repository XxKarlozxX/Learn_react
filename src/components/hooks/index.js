import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './cards';
import SearchInput from './search';
import Typography from '@material-ui/core/Typography';


import { getMovieData } from '../../util/resquest';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
function SearchEngine(props) {

    const classes = useStyles();

    const [ name, setName] = React.useState('');

    const [ movieData, setMovieData] = React.useState({});
    React.useEffect(() => {
      
      const resp = async () => {
        let response = await getMovieData( name );
        setMovieData(response[0]);
      }
      resp();
    }, [name]);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        Get Movies Info
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                   <SearchInput movieTitle={setName}/>
                </Grid>
                { ( name.length > 0 && movieData.Response !== 'False') &&
                    <Grid item xs={5}>
                        <RecipeReviewCard movieData={movieData} />
                    </Grid>
                }
            </Grid>
        </div>
    )
}



export default SearchEngine;


// Componene padre contenedor 

// componente buscador

//componente informacion

