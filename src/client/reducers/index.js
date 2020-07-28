import { combineReducers } from 'redux';

import userReducers from './userReducers';
import authReducer from './authReducer';
import adminReducer from './adminReducer';


export default combineReducers({
    users: userReducers,
    auth: authReducer,
    admins: adminReducer
})