import express from 'express';
import config from '../../config.js';

const indexRoute = new express.Router();

const cfg = new config();
indexRoute.get('/', (req, res) => {
  res.write(`<a href="${cfg.cfgServer.url}:${cfg.cfgServer.port}/api/product">
  ${cfg.cfgServer.host}:${cfg.cfgServer.port}/api/product  </a>  `);
});
// indexRoute.all('*', (req, res) => {
//   res.redirect('/');
// });

export default indexRoute;

// res.write(config.entorno);
//   // res.write(`<a href="http://localhost:3000/api/product/bd">${toString(cfg.cfgServer.host)}${toString(cfg.cfgServer.port)}</a> <- testing`);
//   res.write('<br/>');
//   res.write('<a href="http://localhost:3000/api/product">http://localhost:3000/api/product</a> <- bienvenida a productos/tienda');
//   res.write('<br/>');
//   res.write('<a href="http://localhost:3000/api/product/all"> http://localhost:3000/api/product/all</a> <- todos los productos');
