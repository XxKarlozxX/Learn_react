import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
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
});

class ButtonCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count+1
    });
  }

  shouldComponentUpdate() {
    console.log("render before condition");
    if ( this.state.count % 5 === 0) {
      console.log("render again");
      return true;
    }
    return false;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={4}>
          <div className={classes.title}>
            <Typography variant="h6" gutterBottom >
              Count: {this.state.count}
            </Typography>
          </div>
          <div className={classes.button}>
            <Button onClick={this.handleClick} variant="contained"> Click me</Button>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(ButtonCont);