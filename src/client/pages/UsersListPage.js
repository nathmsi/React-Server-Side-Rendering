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

const config = {
  headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hdGhhbkBnbWFpbC5jb20iLCJpYXQiOjE2MTY0NDc1NjR9.E3DITiPkKmt5_v6J0Y8EdTI3Fg9K0WzJRexme58Yas8` }
};


function UsersList() {
  const classes = useStyles();

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
    Axios.get('api/candidates',config).then(
      (result) => {
        console.log(result);
      }
    )
  }, []);

  return (
    <div className={classes.root}> 
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
        Here's a big list of users:
      <List >
        {
          users.map(user => {
            return (
              <ListItem key={user.id}>
                <ListItemText primary={user.name} secondary={user.id} />
              </ListItem>
            )
          })
        }
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
