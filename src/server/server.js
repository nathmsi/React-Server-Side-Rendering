import express from 'express';
import authRoute from './routes/authRoute';
import candidatesRoute from './routes/candidatesRoute';

const api = express();


api.use('/auth', authRoute);
api.use('/candidates', candidatesRoute);


export default api;