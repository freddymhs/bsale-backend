import express from 'express';
import controllerProduct from '../controllers/controllerProduct.js';

const productRoute = new express.Router();

productRoute.get('/', controllerProduct.allTheProducts);
productRoute.get('/:formName', controllerProduct.filterProductByName);

//
//
//
//
//
//
productRoute.get('/all', (req, res) => { res.send('estos los son productos disponibles'); }); // products  [categoria,buscador]
productRoute.get('/bd', controllerProduct.allTheProducts); // revisando la base de datos
export default productRoute;

// res.json({ username: 'productos homepage' });