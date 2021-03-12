import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config.js'; // settings
import indexRoute from './src/routes/index.js';
import productRoute from './src/routes/products.js';
// instance app
const app = express();
app.use(morgan('combined')); // chekc extra data request
app.use(express.json()); // to use json in my app
app.use(express.urlencoded({ extended: false })); // undertand data from others forms
app.use(cors);
// routes
// // app.use(router);
// const basicRoute = require('./src/routes/index');
// const productRoute = require('./src/routes/products');

app.use('/', indexRoute);
app.use('/api/product', productRoute);

// running server
app.listen(process.env.PORT || config.development.server.port, (err) => {
  if (err) {
    console.log(`error${err}`);
  } else {
    console.log('RUNNING===========');
    console.log('==================');
    console.log('ON================');
    console.log('==================');
    console.log(`${config.development.server.port}==============`);
  }
});
