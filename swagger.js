import swaggerJsDoc from 'swagger-jsdoc';
import Config from './config.js';

const cfg = new Config();
/* setup swagger docs */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: process.env.npm_package_name,
      version: process.env.npm_package_version,
      description: process.env.npm_package_description,
    },
    servers: [
      {
        url: cfg.cfgServer.url,
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/*.js', './app.js'],
};
const specs = swaggerJsDoc(options);

export default specs;
