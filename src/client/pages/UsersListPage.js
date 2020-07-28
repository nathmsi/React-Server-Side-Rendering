import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../actions';

import { Helmet } from 'react-helmet';

function UsersList() {

  const users = useSelector(state => state.users)


  return (
    <div>
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
        Here's a big list of users:
      <ul>
        {
          users.map(user => {
            return <li key={user.id}>{user.name}</li>;
          })
        }
      </ul>
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
