import express from 'express';
import Config from '../../config.js';

const indexRoute = new express.Router();
const cfg = new Config();

indexRoute.get('/', (req, res) => {
  res.write(`<a href="${cfg.cfgServer.url}/api/product">    ejemplo de los productos </a>`);
  res.write('<br/>');
  res.write(`<a href="${cfg.cfgServer.url}/api-docs">    documentacion</a>`);
});

export default indexRoute;
