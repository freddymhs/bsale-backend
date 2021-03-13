import db from '../libs/database.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: int
 *           description: the product id unique
 *         name:
 *           type: string
 *           description: the product name
 *         url_image:
 *           type: string
 *           description: the product image
 *         price:
 *           type: float
 *           description: the product price
 *         discount:
 *           type: int
 *           description: the product discount
 *         category:
 *           type: int
 *           description: the product category
 *       example:
 *         id: 99
 *         name: cafe enlatado
 *         url_image: https://picsum.photos/200/300/
 *         price: 2900
 *         discount: 90
 *         category: 1
 */

// querys
async function mysqlAllProducts() {
  return db.connection.promise().query('select * from product order by category');
}

let modelProduct;
export default modelProduct = { mysqlAllProducts };
