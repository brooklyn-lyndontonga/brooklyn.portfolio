// routes/about.js

import express from 'express';
import { getAboutData } from '../../client/apis/apiAbout';

const router = express.Router();

//GET (/api/v1/about)
router.get('/about', getAboutData) // get about data 


export default router;