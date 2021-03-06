import '@babel/polyfill';
import './utils/dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

process.env.CONNECTION_STRING = "mongodb://Pavel:CLRqFJ9ieCJkfkXk@cluster0-shard-00-00-tiyfv.mongodb.net:27017,cluster0-shard-00-01-tiyfv.mongodb.net:27017,cluster0-shard-00-02-tiyfv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, PUT, POST, DELETE, PATCH');
  next();
});
app.options('*', (req, res) => res.end());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

const server = app.listen(process.env.PORT || 3333, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
