

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch,getState, api) => {

    const res = await api.get('/users');
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
    
}


export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {

  const res = await api.get('/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });

};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {

  const res = await api.get('/admins');
  //console.log(res);
  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });

};


export const FETCH_USERS_LOGIN = 'login_users_login';
export const fetchUsersLogin = () => async (dispatch,getState, api) => {
  console.log('hihihi')
  api.post('api-v1/auth/signin',{
    "firstName": "nathan",
    "password": "123456",
    "email": "nathan@gmail.com"
  }).then((result)=> {
    dispatch({
      type: FETCH_USERS_LOGIN,
      payload: {
        token: result.data
      }
  })
  })
  .catch((error)=> {
    dispatch({
      type: FETCH_USERS_LOGIN,
      payload: {
        error
      }
  })
  })
}