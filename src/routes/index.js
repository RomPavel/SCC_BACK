import express from 'express';
import softwareRoute from './software.js';
import configRoute from './config.js';

const router = express.Router();

router.use('/api/software', softwareRoute);
router.use('/api/config', configRoute);


export default router;
