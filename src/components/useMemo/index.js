import React, {useState, useMemo} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));


export default function ExpensiveProcess() {
    const classes = useStyles();
    // State for our counter
    const [count, setCount] = useState(0);
    // State to keep track of current word in array we want to show
    const [wordIndex, setWordIndex] = useState(0);

    // Words we can flip through and view letter count
    const words = ['hey', 'this', 'is', 'cool'];
    const word = words[wordIndex];

    // Returns number of letters in a word
    // We make it slow by including a large and completely unnecessary loop
    const computeLetterCount = word => {
        let i = 0;
        while (i < 1000000000) i++;
        return word.length;
    };

    // Memoize computeLetterCount so it uses cached return value if input array ...
    // ... values are the same as last time the function was run.
    const letterCount = useMemo(() => computeLetterCount(word), [word]);

    // This would result in lag when incrementing the counter because ...
    // ... we'd have to wait for expensive function when re-rendering.
    //const letterCount = computeLetterCount(word);

    return (
        <>
        <div className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h4">
                        Number of letters 
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h4">
                        <span role="img" aria-label="caracol">(slow 🐌)</span>
                    </Typography>
                </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                Example to represent how it works useMemo.
                </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
                <div>
                    <Typography variant="h5">
                    "{word}" has {letterCount} letters
                    </Typography>
                    <Button
                        onClick={() => {
                            const next = Math.floor(Math.random() * 4);
                                setWordIndex(next);
                        }}
                        variant="contained" color="primary">
                        Next Word
                    </Button>
      
                </div>
            </div>
        </div>
        <div className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h4">
                    Increment a counter 
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h4">
                    <span role="img" aria-label="lightning">(fast ⚡️)</span>
                    </Typography>
                </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                Example to represent how it works useMemo.
                </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
                <div>
                    <Typography variant="h5">
                        Counter: {count}
                    </Typography>
                    <Button
                        onClick={() => setCount(count + 1)}
                        variant="contained"
                        color="primary">
                        Increment
                    </Button>
                </div>
            </div>
            
        </div>
        
        </>
    );
}
