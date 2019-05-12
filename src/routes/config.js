import express from 'express';
import { configSettings } from '../mocks/config.settings';

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        try {
            res.status(200).send(configSettings);
        } catch (err) {
            res.status(500).send(err);
        }
    });

export default router;
