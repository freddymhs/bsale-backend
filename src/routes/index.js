import express from 'express';
import config from '../../config.js';

const indexRoute = new express.Router();

indexRoute.get('/', (req, res) => {
  res.write(config.entorno);
  res.write('<a href="http://localhost:3000/api/product/bd">http://localhost:3000/api/product/bd</a> <- testing');
  res.write('<br/>');
  res.write('<a href="http://localhost:3000/api/product">http://localhost:3000/api/product</a> <- bienvenida a productos/tienda');
  res.write('<br/>');
  res.write('<a href="http://localhost:3000/api/product/all"> http://localhost:3000/api/product/all</a> <- todos los productos');
}); // welcome

export default indexRoute;
