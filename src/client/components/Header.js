import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: '#fff'
  },
  title: {
    flexGrow: 1,
    color: '#fff'
  },
}));


function Headers() {
  const classes = useStyles();

  const auth = useSelector(state => state.auth)


  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            React SSR
          </Typography>

          <Button component={Link} to="/users" className={classes.menuButton}>
            Users
        </Button>
          <Button component={Link} to="/admins" className={classes.menuButton}>
            Admins
        </Button>

          {
            auth ?
              <Button href="/api/logout" className={classes.menuButton}>Logout</Button>
              :
              <Button href="/api/auth/google" className={classes.menuButton}>Login </Button>
          }



        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Headers;