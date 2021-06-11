import Axios from 'axios';
import React, { useState } from 'react';
import { fetchUsersLogin } from '../actions';

import { connect, useDispatch } from 'react-redux'


const login = new Promise(
  (resolve,reject) => Axios.post('api-v1/auth/signin',{
    "firstName": "nathan",
    "password": "123456",
    "email": "nathan@gmail.com"
  }).then((reuslt)=> resolve(reuslt.data))
  .catch((error)=> reject(error))
)
const config = (token) => {
  return { headers: { Authorization: `Bearer ${token}` }}
};


const Home = () => {

  const dispatch = useDispatch();

  useState(() => {
      console.log('hi');
      fetchUsersLogin(dispatch);
      login.then(
        ({ token }) => {
          Axios.get('api-v1/candidates',config(token)).then(
            (result) => {
              console.log(result);
            }
          )
        }
      )
  }
  , [])
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
  );
};

export default {
  component: Home
};