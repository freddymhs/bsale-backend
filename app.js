import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config.js'; // settings
import indexRoute from './src/routes/index.js';
import productRoute from './src/routes/products.js';

// instance
const app = express();
app.use(morgan('combined')); // chekc extra data request
app.use(express.json()); // to use json in my app
app.use(express.urlencoded({ extended: false })); // undertand data from others forms
app.use(cors());

// routes
app.use('/', indexRoute);
app.use('/api/product', productRoute);

// run server
app.listen(config.development.server.port, (err) => {
  if (err) {
    console.log(`error${err}`);
  } else {
    console.log('RUNNING===========');
    console.log('==================');
    console.log('ON================');
    console.log('==================');
    console.log(process.env.BaseUrl);
    console.log(process.env.npm_package_name);

    // console.log("https://"+ process.env.npm_package_name "+.herokuapp.com/");

    console.log(process.env.DATABASE_URL);

    console.log(`${process.env.BASE_URL}=========`);
    console.log(`${process.env.NODE_ENV}=========`); // producto //devel
    console.log(`${process.env.HOSTNAME}=========`);
    console.log(`${config.development.server.host}=========`);
    console.log(`${config.development.server.port}==============`);
  }
});

// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import config from './config.js'; // settings
// import indexRoute from './src/routes/index.js';
// import productRoute from './src/routes/products.js';

// // instance
// const app = express();
// app.use(morgan('combined')); // chekc extra data request
// app.use(express.json()); // to use json in my app
// app.use(express.urlencoded({ extended: false })); // undertand data from others forms
// app.use(cors());

// // routes
// app.use('/', indexRoute);
// app.use('/api/product', productRoute);

// // run server
// app.listen(config.development.server.port, (err) => {
//   if (err) {
//     console.log(`error${err}`);
//   } else {
//     console.log('RUNNING=======================================');
//     console.log('==============================================');
//     console.log('ON============================================');
//     console.log('==============================================');
//     console.log(`${config.development.server.herokURL}==========`);
//     console.log(`${config.development.server.host}=====================================`);
//     console.log(`${config.development.server.port}==========================================`);
//   }
// });
