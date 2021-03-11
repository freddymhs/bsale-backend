import express from 'express';
import morgan from 'morgan';
import config from './config.js'; // settings
import router from './src/routes/route.js';

// instance app
const app = express();
app.use(morgan('combined')); // chekc request
app.use(express.json()); // to use json in my app
app.use(express.urlencoded({ extended: false })); // undertand data from others forms

// routes
app.use(router);

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
