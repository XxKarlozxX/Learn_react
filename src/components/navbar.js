import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ListItemText from '@material-ui/core/ListItemText';
import withStorage from '../HOC/HOCStorage';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  }
}));

function ClippedDrawer(props) {
  const classes = useStyles();
  const userName = props.load('userName') || '';
  const nickName = props.load('nickName') || '';


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">
            {props.title}
          </Typography>
          { ( userName.length > 0  &&  nickName.length > 0 ) &&  
              <Typography variant="h6" className={classes.flex}>{ userName }@{ nickName }</Typography>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {props.options.map((option) => (
            <ListItem button key={option.title} component={Link} to={option.link} >
              <ListItemIcon>{<CheckBoxIcon /> }</ListItemIcon>
              <ListItemText primary={option.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.children}
      </main>
    </div>
  );
}

const ClippedDrawerWrapped = withStorage(ClippedDrawer);
export default ClippedDrawerWrapped;