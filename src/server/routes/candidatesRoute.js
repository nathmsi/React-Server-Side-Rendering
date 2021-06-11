import express from 'express';


const candidateRouter = express.Router();

import * as candidatesController  from '../controllers/candidatesController';

import requireAuth  from '../middlewares/requireAuth';



// GET
candidateRouter.get('/', requireAuth , candidatesController.getlistCandidates); // with middleware auth require



export default candidateRouter;