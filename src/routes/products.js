import express from 'express';
import controllerProduct from '../controllers/controllerProduct.js';

const productRoute = new express.Router();
// http://localhost:3000/api/product
/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [product]
 *     responses:
 *       200:
 *         description: The list of the product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 */

productRoute.get('/', controllerProduct.allTheProducts);

productRoute.get('/:formName', controllerProduct.filterProductByName); //  [categoria,buscador]

export default productRoute;
