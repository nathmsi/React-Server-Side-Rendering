import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

function AdminsListPage() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const admins = useSelector(state => state.admins)

  React.useEffect(() => {
    dispatch(fetchAdmins());
  }, []);

  return (
    <div className={classes.root}> 
      <h3>Protected list of admins</h3>
      <List >
        {
          admins.map(admin => {
            return (
              <ListItem key={admin.id}>
                <ListItemText primary={admin.name} secondary={admin.id} />
              </ListItem>
            )
          })
        }
      </List>
    </div>
  );

}


export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: (requireAuth(AdminsListPage))
};
