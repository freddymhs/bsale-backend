import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config.js'; // settings
import indexRoute from './src/routes/index.js';
import productRoute from './src/routes/products.js';

// instance
const app = express();

// middlewares
app.use(morgan('combined')); // chekc extra data request
app.use(express.json()); // to use json in my app
app.use(express.urlencoded({ extended: false })); // undertand data from others forms
app.use(cors());

// routes
app.use('/', indexRoute);
app.use('/api/product', productRoute);

// run server
const cfg = new config();
app.listen(cfg.cfgServer.port, (err) => {
  if (err) {
    console.log(`error-${err}`);
  } else {
    console.log('RUNNING===========');
    console.log('==================');
    console.log(process.env.npm_package_name);
    console.log('==================');
    console.log('ON================');
    console.log('==================');
    console.log(`${cfg.cfgServer.url}=========`);
    console.log(`${cfg.cfgServer.host}=========`);
    console.log(`${cfg.cfgServer.port}==============`);
  }
});
