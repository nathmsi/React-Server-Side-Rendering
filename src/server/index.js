// import 'babel/polyfill';
import 'regenerator-runtime/runtime';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import RenderRouter from './middlewares/render';

import db from './db/database'; // load db

import api from './server';

const main = express();
main.use(bodyParser.urlencoded({ extended: false }));
main.use(bodyParser.json());
main.use(cors({ origin: true }));

main.post('/users', (req,res) => res.send(req.body));



main.use('/api',api); // api request

main.use('/',RenderRouter); // render page html



// set port, listen for requests
const PORT = 3000;
main.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


