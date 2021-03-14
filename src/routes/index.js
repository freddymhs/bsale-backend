import express from 'express';
import swaggerUI from 'swagger-ui-express';
import Config from '../../config.js';
import specs from '../../swagger.js';

const indexRoute = new express.Router();
const cfg = new Config();

/**
 * @swagger
 * /:
 *   get:
 *     tags: [my examples routes]
 *     responses:
 *       200:
 *         description: the root response
 */
indexRoute.get('/', (req, res) => {
  res.write('<h1>welcome to main root \'/\' Api Rest bsale products</h1>');
  res.write(`<a href="${cfg.cfgServer.url}/">   ruta raiz del API </a>`);
  res.write('<br/>');
  res.write(`<a href="${cfg.cfgServer.url}/api/product">    ruta hacia los productos</a>`);
  res.write('<br/>');
  res.write(`<a href="${cfg.cfgServer.url}/docs">  ruta de la documentacion</a>`);
});

/**
 * @swagger
 * /docs:
 *   get:
 *     tags: [my examples routes]
 *     responses:
 *       200:
 *         description: the docs content
 */
indexRoute.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default indexRoute;
