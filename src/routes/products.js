import express from 'express';
import controllerProduct from '../controllers/controllerProduct.js';

const productRoute = new express.Router();

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [api product]
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
/**
 * @swagger
 * /api/product/{formName}:
 *   get:
 *     summary: find products by name
 *     tags: [api product]
 *     parameters:
 *       - in: path
 *         name: formName
 *         schema:
 *           type: string
 *           default: pisco
 *         required: true
 *     responses:
 *       200:
 *         description:  find some product filtering by name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 */
productRoute.get('/:formName', controllerProduct.filteredByName);

export default productRoute;
