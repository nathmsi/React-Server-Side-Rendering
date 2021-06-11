import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10),
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));






function UsersList() {
  const classes = useStyles();

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
    
  }, []);

  return (
    <div className={classes.root}> 
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
        Here's a big list of users:
      <List >
      </List>
    </div>
  );
}


function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: UsersList
};
