import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
// import config from './config.js'; // settings
import indexRoute from './src/routes/index.js';
import productRoute from './src/routes/products.js';
import config from './config.js';

const cfg = new config();

/* setup swagger docs */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 's',
      version: 's',
      description: 'sda',
    },
    servers: [
      {
        url: 'qt',
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/*.js'],
};
const specs = swaggerJsDoc(options);

/* initialization */
const app = express();

/* middlewares */
app.use(morgan('combined')); // chekc extra data request
app.use(express.json()); // to use json in my app
app.use(express.urlencoded({ extended: false })); // undertand data from others forms
app.use(cors()); // allow share

/* routes */
app.use('/', indexRoute);
app.use('/api/product', productRoute);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.all('*', (req, res) => {
  res.redirect('/');
});

/* run server */
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
    console.log(`${cfg.cfgServer.url}==`);
    console.log(`${cfg.cfgServer.host}=========`);
    console.log(`${cfg.cfgServer.port}==============`);
  }
});
