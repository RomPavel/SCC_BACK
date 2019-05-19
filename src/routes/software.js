import express from 'express';
import { Software } from '../models/software';
import { calculate } from '../controllers/calculate';

const router = express.Router();

router
  .get('/all', async (req, res) => {
    try {
      const software = await Software.find();
      res.status(200).send(software);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .post('/new', async (req, res) => {
    try {
      const { name } = req.body;
      const software = await new Software({ name }).save();
      res.status(200).send(software);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .put('/update', async (req, res) => {
    try {
      const { config, _id } = req.body;
      const laboriousness = calculate(config);
      await Software.findByIdAndUpdate(_id, { config, isConfigured: true, laboriousness });
      res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .put('/salary', async (req, res) => {
    try {
      const { employeeSalary, _id, currency } = req.body;
      const { laboriousness } = await Software.findById(_id);
      const cost = employeeSalary === "" ? "" : `${(+laboriousness / 31 * +employeeSalary).toFixed(2)}`;
      await Software.findByIdAndUpdate(_id, { cost, currency, employeeSalary });
      res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  });


export default router;
