import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cuadrito from './cuadrito';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(25),
        height: theme.spacing(25),
      },
    },
    button: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    title: {
      width: '100%',
      maxWidth: 500,
      marginTop: '20%'
    },
}));

function ColorMemo(props) {
    const classes = useStyles();

    const [ count, setCount ] = React.useState(1);
    const [colorKey, setColorKey ] = React.useState(0); 

    function handleClick() {
        setCount(count +1);
        if ( count % 5 === 0) {
          setColorKey( colorKey +1 );
        }
    }

    return (
        <div className={classes.root} >
            <Cuadrito colorKey={colorKey}/>
            <div className={classes.button}>
              <Button onClick={ e => handleClick(e) } variant="contained"> Click me</Button>
            </div>
        </div>
    )
}


export default ColorMemo;

