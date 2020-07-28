import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

function AdminsListPage() {

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(fetchAdmins());
  },[]);

  return (
    <div>
      <h3>Protected list of admins</h3>
      <ul>
        {
          this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
          })
        }
        </ul>
    </div>
  );

}


export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: (requireAuth(AdminsListPage))
};
